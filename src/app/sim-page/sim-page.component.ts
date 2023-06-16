import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { SysService } from '../sys.service';

@Component({
  selector: 'app-sim-page',
  templateUrl: './sim-page.component.html',
  styleUrls: ['./sim-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SimPageComponent {
  constructor(private router: Router, private sysService: SysService) {}

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
  }

  closeSim(isSimClosed: boolean) {
    if (isSimClosed) {
      this.sysService.setSysState(false);
      this.router.navigate(['']);
    }
  }
}
