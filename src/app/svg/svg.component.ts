import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SvgComponent {
  @Input() title: string = '';
  @Input() dim: string = '';
  @Input() color: string = '';
}
