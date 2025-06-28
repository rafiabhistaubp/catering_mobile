import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KokiPage } from './koki.page';

const routes: Routes = [
  {
    path: '',
    component: KokiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KokiPageRoutingModule {}
