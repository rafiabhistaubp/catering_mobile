import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private navCtrl: NavController) {}

  goToPesanan() {
    console.log('Navigating to Pesanan...');
    this.navCtrl.navigateForward('/pesanan');
  }

  goToScanKaryawan() {  
    this.navCtrl.navigateForward('/scan-karyawan');
  }

  goToBarcode() {
    this.navCtrl.navigateForward('/barcode');
  }
}
