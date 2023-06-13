import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-sinal-icon',
  templateUrl: './input-sinal-icon.component.html',
  styleUrls: ['./input-sinal-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputSinalIconComponent {
  @Input() type: string = 'step';
  @Input() dim: string = '3rem';
  @Input() backgroundColor: string = '#ffffff';
  @Input() color: string = '#000000';

  styles: any;

  ngOnInit() {
    this.styles = {
      backgroundColor: this.backgroundColor,
    };
  }
}
