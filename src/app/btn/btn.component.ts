import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  @Input() customStyles: any;
  @Input() primary: string = '';
  @Input() secondary: string = '';

  @Output() btnClick = new EventEmitter<boolean>();

  handleClick() {
    this.btnClick.emit(true);
  }
}
