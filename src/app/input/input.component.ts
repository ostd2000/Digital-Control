import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
  @Input() generalStyles: any;
  @Input() inputStyles: any;
  @Input() labelStyles: any;
  @Input() placeHolder: string = '';

  @Output() inputValue = new EventEmitter<string>();

  handleChange(e: any) {
    this.inputValue.emit(e.target.value);
  }
}
