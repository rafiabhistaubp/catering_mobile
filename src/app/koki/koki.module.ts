import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KokiPageRoutingModule } from './koki-routing.module';

import { KokiPage } from './koki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KokiPageRoutingModule
  ],
  declarations: [KokiPage]
})
export class KokiPageModule {}
