import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SimulationComponent {
  ngOnInit() {
    const canvas = document.getElementById('simulation') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    if (context) {
      // Set the background color
      context.fillStyle = '#121212'; // You can use any valid CSS color value

      // Fill the entire canvas with the specified color
      context.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      console.error('Canvas context is not supported in this browser.');
    }
  }
}
