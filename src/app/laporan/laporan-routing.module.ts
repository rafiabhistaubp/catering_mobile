import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaporanPage } from './laporan.page';

const routes: Routes = [
  {
    path: '',
    component: LaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporanPageRoutingModule {}
