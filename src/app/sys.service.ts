import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SysService {
  constructor() {}

  private dataSubject = new BehaviorSubject<boolean>(false);
  public isSysReady$ = this.dataSubject.asObservable();

  setSysState(newState: boolean) {
    // Send updated value to all subscribers
    this.dataSubject.next(newState);
  }

  codeEditorContent: string = '';
  inputSignal: string = '';
  samplingTime: string = '';
  numerator: number[] = [];
  denominator: number[] = [];
  sysType: string = '';

  addNumerator(n: string) {
    const trimmed1: string = n.trim();
    const removeBracket: string = trimmed1.slice(1, trimmed1.length - 1);
    const trimmed2: string = removeBracket.trim();
    const coefficientsStrArr: string[] = trimmed2.split(' ');
    const coefficentsNumArr: number[] = [];

    for (let i = 0; i < coefficientsStrArr.length; i++) {
      coefficentsNumArr[i] = +coefficientsStrArr[i];
    }

    this.numerator = coefficentsNumArr;
  }

  addDenominator(d: string) {
    const trimmed1: string = d.trim();
    const removeBracket: string = trimmed1.slice(1, trimmed1.length - 1);
    const trimmed2: string = removeBracket.trim();
    const coefficientsStrArr: string[] = trimmed2.split(' ');
    const coefficentsNumArr: number[] = [];

    for (let i = 0; i < coefficientsStrArr.length; i++) {
      coefficentsNumArr[i] = +coefficientsStrArr[i];
    }

    this.denominator = coefficentsNumArr;
  }
}
