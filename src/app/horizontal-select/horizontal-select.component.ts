import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-horizontal-select',
  templateUrl: './horizontal-select.component.html',
  styleUrls: ['./horizontal-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HorizontalSelectComponent {
  @Input() num: number = 2;
  @Input() data: string[] = [];
  @Input() sm: boolean = false;

  @Output() selectedItem = new EventEmitter<string>();

  active2: string = 'left';
  active3: string = 'center';

  handleClick2(selectedItem: string) {
    this.active2 = selectedItem;

    this.selectedItem.emit(selectedItem);
  }

  handleClick3(selectedItem: string) {
    this.active3 = selectedItem;

    this.selectedItem.emit(selectedItem);
  }
}
