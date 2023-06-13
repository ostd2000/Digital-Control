import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-signal-item',
  templateUrl: './input-signal-item.component.html',
  styleUrls: ['./input-signal-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputSignalItemComponent {
  @Input() type: string = '';
  @Input() active: boolean = false;
}
