import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sim-page',
  templateUrl: './sim-page.component.html',
  styleUrls: ['./sim-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SimPageComponent {
  @Input() activeFloatingBtn: string = 'none';

  handleZoomClick(zoomType: string) {
    if (zoomType == 'zoom-in') {
      if (this.activeFloatingBtn == 'zoom-in') {
        this.activeFloatingBtn = 'none';
      } else {
        this.activeFloatingBtn = 'zoom-in';
      }
    }

    if (zoomType == 'zoom-out') {
      if (this.activeFloatingBtn == 'zoom-out') {
        this.activeFloatingBtn = 'none';
      } else {
        this.activeFloatingBtn = 'zoom-out';
      }
    }

    console.log(this.activeFloatingBtn);
  }
}
