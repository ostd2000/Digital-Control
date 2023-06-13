import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenSysPageComponent } from './gen-sys-page/gen-sys-page.component';
import { SimPageComponent } from './sim-page/sim-page.component';

const routes: Routes = [
  { path: '', component: GenSysPageComponent },
  { path: 'sim', component: SimPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
