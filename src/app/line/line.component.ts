import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LineComponent {
  @Input() vert: boolean = false;
  @Input() length: string = '10rem';
  @Input() color: string = '#ffffff';
  @Input() stroke: string = '1px';

  styles: any;

  ngOnChanges() {
    this.styles = {
      [this.vert ? 'height' : 'width']: this.length,
      [this.vert ? 'width' : 'height']: this.stroke,
      backgroundColor: this.color,
    };
  }
}
