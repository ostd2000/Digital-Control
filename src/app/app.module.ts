import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSignalComponent } from './input-signal/input-signal.component';
import { SamplingTimeComponent } from './sampling-time/sampling-time.component';
import { GenSysPageComponent } from './gen-sys-page/gen-sys-page.component';
import { SysSpecComponent } from './sys-spec/sys-spec.component';
import { BtnComponent } from './btn/btn.component';
import { InputComponent } from './input/input.component';
import { HorizontalSelectComponent } from './horizontal-select/horizontal-select.component';
import { TransferFuncComponent } from './transfer-func/transfer-func.component';
import { SysRepComponent } from './sys-rep/sys-rep.component';
import { InputSignalItemComponent } from './input-signal-item/input-signal-item.component';
import { LineComponent } from './line/line.component';
import { SvgComponent } from './svg/svg.component';
import { PopupComponent } from './popup/popup.component';
import { SumComponent } from './sum/sum.component';

import { MathjaxModule } from 'mathjax-angular';
import { ArrowComponent } from './arrow/arrow.component';
import { InputSinalIconComponent } from './input-sinal-icon/input-sinal-icon.component';
import { ArrowLineComponent } from './arrow-line/arrow-line.component';
import { SysRepPopupComponent } from './sys-rep-popup/sys-rep-popup.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { ControllerComponent } from './controller/controller.component';
import { SimPageComponent } from './sim-page/sim-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSignalComponent,
    SamplingTimeComponent,
    GenSysPageComponent,
    SysSpecComponent,
    BtnComponent,
    InputComponent,
    HorizontalSelectComponent,
    TransferFuncComponent,
    SysRepComponent,
    InputSignalItemComponent,
    LineComponent,
    SvgComponent,
    PopupComponent,
    SumComponent,
    ArrowComponent,
    InputSinalIconComponent,
    ArrowLineComponent,
    SysRepPopupComponent,
    CodeEditorComponent,
    ControllerComponent,
    SimPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathjaxModule.forRoot(/*Optional Config*/),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
