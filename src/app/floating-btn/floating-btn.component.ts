import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss'],
})
export class FloatingBtnComponent {
  @Input() styles: any;
  @Input() active: boolean = false;
}
