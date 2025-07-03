import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPesananPageRoutingModule } from './form-pesanan-routing.module';

import { FormPesananPage } from './form-pesanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPesananPageRoutingModule
  ],
  declarations: [FormPesananPage]
})
export class FormPesananPageModule {}
