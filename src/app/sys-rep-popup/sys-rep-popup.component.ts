import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { SysService } from '../sys.service';

@Component({
  selector: 'app-sys-rep-popup',
  templateUrl: './sys-rep-popup.component.html',
  styleUrls: ['./sys-rep-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SysRepPopupComponent {
  btnMarginTop: any;

  constructor(private router: Router, private sysService: SysService) {}

  ngOnInit() {
    if (this.sysService.sysType == 'Open Loop') {
      this.btnMarginTop = {
        marginTop: '12rem',
      };
    } else {
      this.btnMarginTop = {
        marginTop: '7.5rem',
      };
    }
  }

  handleClose() {
    this.sysService.setSysState(false);
  }

  handleClick() {
    this.router.navigate(['/sim']);
  }
}
