import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopupComponent {
  @Input() customStyles: any;
}
