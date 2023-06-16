import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss'],
})
export class FloatingBtnComponent {
  @Input() styles: any;
  @Input() active: boolean = false;

  @Output() btnClick = new EventEmitter<boolean>();

  handleClick() {
    this.btnClick.emit(true);
  }
}
