import { Component, ViewEncapsulation } from '@angular/core';

import { SysService } from '../sys.service';

@Component({
  selector: 'app-input-signal',
  templateUrl: './input-signal.component.html',
  styleUrls: ['./input-signal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputSignalComponent {
  active: string = 'step';

  constructor(private sysService: SysService) {}

  ngOnInit() {
    // Subscribe to the isSysReady$ observable
    this.sysService.isSysReady$.subscribe((newValue) => {
      // Handle the updated value here
      console.log('New value:', newValue);
      // Perform any necessary actions
      if (newValue) {
        this.sysService.inputSignal = this.active;
      }
    });
  }

  handleClick(inputSignal: string) {
    this.active = inputSignal;
  }
}
