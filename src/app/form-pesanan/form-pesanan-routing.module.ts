import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPesananPage } from './form-pesanan.page';

const routes: Routes = [
  {
    path: '',
    component: FormPesananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPesananPageRoutingModule {}
