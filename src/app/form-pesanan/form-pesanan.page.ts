import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PesananService } from '../pesanan.service';
import { Pesanan } from './form.model';  // Import interface Pesanan

@Component({
  standalone: false,
  selector: 'app-form-pesanan',
  templateUrl: './form-pesanan.page.html',
  styleUrls: ['./form-pesanan.page.scss'],
})
export class FormPesananPage {
  pesanan: Pesanan = {
  id: 0,  // id wajib terisi
  nama_makanan: '',
  porsi: 0,
  untuk_tanggal: '',
  foto: null,  // Foto bertipe File | null
  fotoURL: null,  // Foto URL untuk preview
  fotoName: null,  // Nama file foto yang dipilih
  deskripsi: '',  // Deskripsi pesanan
  shift: '1',  // Default shift (you can change this based on your needs)
};

  loading: boolean = false;
  errorMessage: string = '';

  onFileChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input && input.files && input.files[0]) {
    const file = input.files[0];  // Get the selected file
    this.pesanan.foto = file;  // Store the file itself
    this.pesanan.fotoURL = URL.createObjectURL(file);  // Create an object URL for the preview
    this.pesanan.fotoName = file.name;  // Save the file name
  }
}



  constructor(
    private navCtrl: NavController,
    private pesananService: PesananService
  ) {}

  // Fungsi untuk mengirimkan data pesanan baru ke backend
  async submitPesanan(pesanan: Pesanan) {
  this.loading = true;
  this.errorMessage = '';  // Reset errorMessage setiap kali submit
  try {
    // Pastikan foto sudah terisi
    if (!pesanan.foto) {
      throw new Error('Foto harus disertakan!');
    }

    console.log('Data pesanan:', pesanan);

    // Mengirim data pesanan ke backend
    const response = await this.pesananService.addPesanan(pesanan);
    console.log('Pesanan berhasil dikirim:', response);

    // Ensure you get the ID from the response and set it on your pesanan object
    if (response && response.id) {
      pesanan.id = response.id;  // Assuming the response has the ID of the new order
    } else {
      throw new Error('ID tidak ditemukan pada response.');
    }

    // Navigasi ke halaman ListPesananPage setelah pengiriman berhasil
    this.navCtrl.navigateForward('/pesanan');
  } catch (error: unknown) {
    if (error instanceof Error) {
      this.errorMessage = error.message || 'Gagal mengirim pesanan. Coba lagi nanti.';
    } else {
      this.errorMessage = 'Terjadi kesalahan yang tidak diketahui.';
    }
  } finally {
    this.loading = false;  // Pastikan loading dimatikan setelah proses selesai
  }
}


  // Fungsi untuk kembali ke halaman sebelumnya
  goBack() {
    this.navCtrl.back();  // Kembali ke halaman sebelumnya
  }
}
