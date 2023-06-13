import { Component, ViewEncapsulation } from '@angular/core';

import { SysService } from '../sys.service';

@Component({
  selector: 'app-sampling-time',
  templateUrl: './sampling-time.component.html',
  styleUrls: ['./sampling-time.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SamplingTimeComponent {
  selectedItem: string = 'center';
  selectedSamplingTime: string = '10 ms';
  arbitrarySamplingTime: string = '';

  constructor(private sysService: SysService) {}

  ngOnInit() {
    // Subscribe to the isSysReady$ observable
    this.sysService.isSysReady$.subscribe((newValue) => {
      // Handle the updated value here
      console.log('New value:', newValue);
      // Perform any necessary actions
      if (newValue) {
        if (this.arbitrarySamplingTime == '') {
          this.sysService.samplingTime = this.selectedSamplingTime;
        } else {
          this.sysService.samplingTime = this.arbitrarySamplingTime;
        }
      }
    });
  }

  ngDoCheck() {
    switch (this.selectedItem) {
      case 'left':
        this.selectedSamplingTime = '1 ms';
        break;
      case 'center':
        this.selectedSamplingTime = '10 ms';
        break;
      case 'right':
        this.selectedSamplingTime = '100 ms';
        break;
    }
  }

  handleSelect(selectedItem: string) {
    this.selectedItem = selectedItem;
  }

  handleInput(inputValue: string) {
    this.arbitrarySamplingTime = inputValue;
  }
}
