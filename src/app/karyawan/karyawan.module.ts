import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaryawanPageRoutingModule } from './karyawan-routing.module';

import { KaryawanPage } from './karyawan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaryawanPageRoutingModule
  ],
  declarations: [KaryawanPage]
})
export class KaryawanPageModule {}
