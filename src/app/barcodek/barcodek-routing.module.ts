import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodekPage } from './barcodek.page';


const routes: Routes = [
  {
    path: '',
    component: BarcodekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodekPageRoutingModule {}
