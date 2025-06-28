import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodekPageRoutingModule } from './barcodek-routing.module';

import { BarcodekPage } from './barcodek.page'; // Import the BarcodekPage component

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodekPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [BarcodekPage], // Declare BarcodekPage here
  schemas: [] // Remove CUSTOM_ELEMENTS_SCHEMA if you're not using Web Components
})
export class BarcodekPageModule {}
