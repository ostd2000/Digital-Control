import { Component, ViewEncapsulation } from '@angular/core';

import { SysService } from '../sys.service';

@Component({
  selector: 'app-gen-sys-page',
  templateUrl: './gen-sys-page.component.html',
  styleUrls: ['./gen-sys-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GenSysPageComponent {
  isSysReady: boolean = false;

  constructor(private sysService: SysService) {}

  ngOnInit() {
    // Subscribe to the isSysReady$ observable
    this.sysService.isSysReady$.subscribe((newValue) => {
      // Handle the updated value here
      console.log('New valueeee:', newValue);
      // Perform any necessary actions
      this.isSysReady = newValue;
    });
  }

  createSys(isSysReady: boolean) {
    this.sysService.setSysState(isSysReady);

    this.isSysReady = isSysReady;
  }
}
