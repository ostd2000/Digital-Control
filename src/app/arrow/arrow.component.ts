import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArrowComponent {
  @Input() direction: string = 'right';
  @Input() length: string = '10rem';
  @Input() color: string = '#ffffff';
  @Input() stroke: string = '1px';

  rotationDeg: string = '0';
  generalStyles: any;
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
  }
}
