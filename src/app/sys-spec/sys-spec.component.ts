import { Component, ViewEncapsulation } from '@angular/core';

import { SysService } from '../sys.service';

@Component({
  selector: 'app-sys-spec',
  templateUrl: './sys-spec.component.html',
  styleUrls: ['./sys-spec.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SysSpecComponent {
  numerator: string = '[1]';
  denominator: string = '[1 0.5]';
  sysType: string = 'Open Loop';
  selectedItem: string = 'left';

  constructor(private sysService: SysService) {}

  ngOnInit() {
    // Subscribe to the isSysReady$ observable
    this.sysService.isSysReady$.subscribe((newValue) => {
      // Handle the updated value here
      console.log('New value:', newValue);
      // Perform any necessary actions
      if (newValue) {
        this.sysService.addNumerator(this.numerator);
        this.sysService.addDenominator(this.denominator);

        this.sysService.sysType = this.sysType;
      }
    });
  }

  ngDoCheck() {
    if (this.selectedItem == 'left') {
      this.sysType = 'Open Loop';
    } else {
      this.sysType = 'Closed Loop';
    }
  }

  handleNumerator(n: string) {
    this.numerator = n;
  }

  handleDenominator(d: string) {
    this.denominator = d;
  }

  handleSelect(selectedItem: string) {
    this.selectedItem = selectedItem;
  }
}
