import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-transfer-func',
  templateUrl: './transfer-func.component.html',
  styleUrls: ['./transfer-func.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TransferFuncComponent {
  @Input() numerator: number[] = [];
  @Input() denominator: number[] = [];

  content: string = '$1 \\over z + 0.5$';

  ngOnInit() {
    this.genContent(this.numerator, this.denominator);
  }

  genContent(numerator: number[], denominator: number[]) {
    const nLen: number = numerator.length;
    const dLen: number = denominator.length;

    let c: string = '';
    let n: string = '';
    let d: string = '';

    for (let i = 0; i < nLen; i++) {
      if (i == nLen - 1) {
        if (numerator[i] != 0) {
          n += `${numerator[i]}`;
        }
      } else {
        if (numerator[i] == 1) {
          if (nLen - i - 1 == 1) {
            n += `z + `;
          } else {
            n += `z^${nLen - i - 1} + `;
          }
        }

        if (numerator[i] != 1 && numerator[i] != 0) {
          if (nLen - i - 1 == 1) {
            n += `${numerator[i]}z +`;
          } else {
            n += `${numerator[i]}z^${nLen - i - 1} +`;
          }
        }
      }
    }

    for (let i = 0; i < dLen; i++) {
      if (i == dLen - 1) {
        if (denominator[i] != 0) {
          d += `${denominator[i]}`;
        }
      } else {
        if (denominator[i] == 1) {
          if (dLen - i - 1 == 1) {
            d += `z + `;
          } else {
            d += `z^${dLen - i - 1} + `;
          }
        }

        if (denominator[i] != 1 && denominator[i] != 0) {
          if (dLen - i - 1 == 1) {
            d += `${denominator[i]}z +`;
          } else {
            d += `${denominator[i]}z^${dLen - i - 1} +`;
          }
        }
      }
    }

    c = '$' + n + '\\over ' + d + '$';

    this.content = c;
  }
}
