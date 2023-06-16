import { Component, ViewEncapsulation } from '@angular/core';
import { SysService } from '../sys.service';

import * as math from '../../assets/js/mat';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SimulationComponent {
  constructor(private sysService: SysService) {}

  createCtx(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const canvas = document.getElementById('simulation') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      resolve(ctx);
    });
  }

  ngOnInit() {
    this.createCtx().then((ctx) => {
      const canvas = document.getElementById('simulation') as HTMLCanvasElement;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Get width and height
      const width = canvas.width;
      const height = canvas.height;
      const timeStepPlot = 2; //100ms
      const yStepPlot = 0.9;

      let squareNumberHorizontally = 30;
      let squareNumberVertically =
        Math.floor(height / width) * squareNumberHorizontally;
      let squareSize = Math.floor(width / squareNumberHorizontally);

      const xc = 0;
      const yc = 0.5 * height;
      const step = 0.001;

      // motagayer haye halat
      let x = Array(100).fill(0);
      let xp = math.zeros(this.sysService.denominator.length - 1, 1);
      let sys = math.ss(this.sysService.numerator, this.sysService.denominator);
      console.log(sys);
      let sysd = math.c2d(sys, step);
      console.log(sysd);
      let A = sysd.A;
      let B = sysd.B;
      let C = sysd.C;
      let D = sysd.D;

      // this function draw Grid
      function drawGrid() {
        ctx.fillStyle = '#121212';
        ctx.fillRect(0, 0, width, height);
        //draw two center line
        ctx.beginPath();
        ctx.moveTo(xc, height);
        ctx.lineTo(xc, 0);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#2e3749';
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width, yc);
        ctx.lineTo(0, yc);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#2e3749';
        ctx.stroke();
        //draw Grid
        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 0.3;
        for (let x = xc; x < width; x += squareSize) {
          for (let y = yc; y < height; y += squareSize) {
            ctx.strokeRect(x, y, squareSize, squareSize);
            ctx.strokeStyle = '#2e3749';
            ctx.stroke();
          }
        }
        for (let x = xc; x >= 0; x -= squareSize) {
          for (let y = yc; y >= 0; y -= squareSize) {
            ctx.strokeRect(
              x - squareSize,
              y - squareSize,
              squareSize,
              squareSize
            );
            ctx.strokeStyle = '#2e3749';
            ctx.stroke();
          }
        }
        for (let x = xc; x < width; x += squareSize) {
          for (let y = yc; y >= 0; y -= squareSize) {
            ctx.strokeRect(x, y - squareSize, squareSize, squareSize);
            ctx.strokeStyle = '#2e3749';
            ctx.stroke();
          }
        }
        for (let x = xc; x >= 0; x -= squareSize) {
          for (let y = yc; y < height; y += squareSize) {
            ctx.strokeRect(x - squareSize, y, squareSize, squareSize);
            ctx.strokeStyle = '#2e3749';
            ctx.stroke();
          }
        }
      }

      function mapCordinate(x: number, y: number) {
        let newx = Math.floor(x * squareSize * (1 / timeStepPlot)) + xc;
        let newy = -Math.floor(y * squareSize * (1 / yStepPlot)) + yc;
        return { x: newx, y: newy };
      }

      function gradient(a: any, b: any) {
        return (b.y - a.y) / (b.x - a.x);
      }

      function plot(
        xlist: number[],
        ylist: number[],
        color: string,
        storkeSize: number
      ) {
        let n = xlist.length;
        ctx.globalAlpha = 1;
        let point1 = mapCordinate(xlist[0], ylist[0]);
        ctx.beginPath();
        ctx.moveTo(point1.x, point1.y);
        let m = 0;
        let dx1 = 0;
        let dy1 = 0;
        let dx2;
        let dy2;
        let f = 1;
        let t = 0.3;
        for (let i = 1; i < n; i++) {
          let point2 = mapCordinate(xlist[i], ylist[i]);
          let point3 = mapCordinate(xlist[i + 1], ylist[i + 1]);
          if (point3) {
            m = gradient(point1, point3);
            dx2 = (point3.x - point2.x) * -f;
            dy2 = dx2 * m * t;
          } else {
            dx2 = 0;
            dy2 = 0;
          }
          ctx.bezierCurveTo(
            point1.x - dx1,
            point1.y - dy1,
            point2.x + dx2,
            point2.y + dy2,
            point2.x,
            point2.y
          );
          dx1 = dx2;
          dy1 = dy2;
          point1 = point2;
        }
        ctx.lineWidth = storkeSize;
        ctx.strokeStyle = color;
        ctx.stroke();
      }

      const controller = (r: any, y: any, Ts: any) => {
        //write your controller code here
        let u = 0;
        eval(this.sysService.codeEditorContent);

        return u;
      };

      const plant = (u1: any) => {
        let u = [[u1]];

        let y = math.add(math.dot(C, xp), math.dot(D, u));
        xp = math.add(math.dot(A, xp), math.dot(B, u));

        return y[0][0];
      };

      function createList(
        begin: number,
        end: number,
        step: number,
        myfunc: any
      ) {
        let mylist = [];
        for (let i = begin; i < end; i += step) {
          mylist.push(myfunc(i));
        }
        return mylist;
      }

      function transferFunction(input: any, step: any, Ts: any) {
        let mylist = [];
        let cnt = Math.floor(Ts / step);
        let y = 0;
        let u = 0;
        for (let i = 0; i < input.length; i += 1) {
          if (i % cnt == 0) u = controller(input[i], y, Ts);
          y = plant(u);
          mylist.push(y);
        }
        return mylist;
      }
      const render = (Ts = 0.001, start = 0) => {
        drawGrid();
        let end = squareNumberHorizontally * 10 + 1;
        let time = createList(start, end, step, (x: number) => {
          return x;
        });
        let input = createList(start, end, step, (t: number) => {
          let frequency = 0.05;
          let r = 4 * Math.sin(2 * Math.PI * frequency * t);
          if (this.sysService.inputSignal == 'step')
            r = 4 * Math.sign(Math.sin(2 * Math.PI * frequency * t));
          else if (this.sysService.inputSignal == 'ramp') {
            x[99] +=
              step * 0.5 * Math.sign(Math.sin(2 * Math.PI * frequency * t));
            r = x[99];
          }
          r = 4;
          return r;
        });
        let output1 = transferFunction(input, step, Ts);
        plot(time, input, '#f0f8ff', 1);
        plot(time, output1, '#18f0f0', 1);
      };
      const run = () => {
        let select = this.sysService.samplingTime;
        let Ts = 0.001;
        if (select == '10 ms') Ts = 0.01;
        else if (select == '100 ms') Ts = 0.1;
        render(Ts);
      };
      // let wheelCounter = 0;
      // canvas.addEventListener('wheel', (event) => {
      //   wheelCounter++;
      //   if (event.deltaY < 0) squareSize++;
      //   else if (squareSize > 4) squareSize--;
      //   squareNumberHorizontally = (18 / squareSize) * 70;
      //   squareNumberVertically = (18 / squareSize) * 40;
      //   if (wheelCounter % 4 == 0) run();
      // });
      if (ctx) {
        // Set the background color
        run();
      } else {
        console.error('Canvas context is not supported in this browser.');
      }
    });
  }
}
