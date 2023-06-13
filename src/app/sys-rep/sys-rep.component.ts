import { Component, ViewEncapsulation } from '@angular/core';

import { SysService } from '../sys.service';

@Component({
  selector: 'app-sys-rep',
  templateUrl: './sys-rep.component.html',
  styleUrls: ['./sys-rep.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SysRepComponent {
  inputSignal: string = 'step';
  samplingTime: string = '10 ms';
  numerator: number[] = [1];
  denominator: number[] = [1, 0.5];
  sysType: string = 'Open Loop';

  sysRepC2Styles: any;

  constructor(private sysService: SysService) {}

  ngOnInit() {
    this.inputSignal = this.sysService.inputSignal;
    this.samplingTime = this.sysService.samplingTime;
    this.numerator = this.sysService.numerator;
    this.denominator = this.sysService.denominator;
    this.sysType = this.sysService.sysType;
    console.log(this.sysType);

    const dLen = this.denominator.length;

    this.sysRepC2Styles = {
      width: `${72.5 + dLen - 2}%`,
    };
  }
}
