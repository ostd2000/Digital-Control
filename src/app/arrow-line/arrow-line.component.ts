import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-arrow-line',
  templateUrl: './arrow-line.component.html',
  styleUrls: ['./arrow-line.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArrowLineComponent {
  @Input() direction: string = 'right';
  @Input() length: string = '10rem';
  @Input() color: string = '#ffffff';
  @Input() stroke: string = '1px';

  rotationDeg: string = '0';
  generalStyles: any;
  lineStyles: any;
  arrowStyles: any;

  ngOnInit() {
    switch (this.direction) {
      case 'left':
        this.rotationDeg = '180';
        break;
      case 'up':
        this.rotationDeg = '-90';
        break;
      case 'down':
        this.rotationDeg = '90';
        break;
      default:
        this.rotationDeg = '0';
    }

    this.generalStyles = {
      transform: `rotate(${this.rotationDeg}deg)`,
    };

    this.arrowStyles = {
      color: this.color,
    };

    this.lineStyles = {
      width: this.length,
      backgroundColor: this.color,
      height: this.stroke,
    };
  }
}
