import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PesananService } from '../pesanan.service';  // Pastikan path ke PesananService benar
import { Pesanan } from './pesanan.model';  // Mengimpor interface Pesanan dari pesanan.model.ts

@Component({
  standalone: false,
  selector: 'app-pesanan',
  templateUrl: './pesanan.page.html',
  styleUrls: ['./pesanan.page.scss'],
})
export class PesananPage implements OnInit {
  orders: Pesanan[] = [];  // Menyimpan data pesanan yang diambil dari API
  loading: boolean = false;
  errorMessage: string = '';  // Menambahkan errorMessage untuk menampilkan pesan error

  constructor(
    private navCtrl: NavController,
    private pesananService: PesananService  // Menambahkan PesananService
  ) {}

  ngOnInit() {
    this.loadPesanan();  // Memanggil fungsi untuk mengambil data pesanan saat komponen diinisialisasi
  }

  // Fungsi untuk mengambil data pesanan
  async loadPesanan() {
    this.loading = true;  // Menandakan bahwa data sedang dimuat
    this.errorMessage = '';  // Reset pesan error sebelum melakukan permintaan data
    try {
      // Mengambil data dari PesananService
      const data = await this.pesananService.getPesanan();  // Menggunakan async/await

      // Memastikan data yang diterima adalah array dan menyimpannya
      if (Array.isArray(data)) {
        this.orders = data;  // Menyimpan data pesanan yang diterima dari API
        console.log('Data pesanan berhasil diambil:', data);
      } else {
        console.error('Data pesanan tidak valid:', data);
        this.orders = [];  // Jika data tidak valid, set orders sebagai array kosong
        this.errorMessage = 'Data pesanan tidak valid';  // Menampilkan pesan error jika data tidak valid
      }
    } catch (error) {
      console.error('Gagal mengambil data pesanan:', error);
      this.orders = [];  // Set orders menjadi array kosong jika terjadi error
      this.errorMessage = 'Gagal memuat data pesanan. Coba lagi nanti.';  // Menampilkan pesan error jika gagal mengambil data
    } finally {
      this.loading = false;  // Menandakan bahwa data sudah dimuat atau gagal dimuat
    }
  }

  // Fungsi untuk navigasi ke dashboard
  goToDashboard() {
    console.log('Navigating to Dashboard...');
    this.navCtrl.navigateForward('/dashboard');
  }

  // Fungsi untuk kembali ke halaman sebelumnya
  goBack() {
    this.navCtrl.back();  // Fungsi untuk kembali ke halaman sebelumnya
  }
}
