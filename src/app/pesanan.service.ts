import { Injectable } from '@angular/core';
import axios from 'axios';

interface Pesanan {
  id: number;
  deskripsi: string;
  nama_makanan: string;
  shift: string;
  porsi: number;
  untuk_tanggal: string;
  foto: File | null;
  fotoURL: string | null;
  fotoName: string | null;  // Ensure consistency here too
}

@Injectable({
  providedIn: 'root',
})
export class PesananService {
  private apiUrl = 'https://qrdins.my.id/api/pesan';  // URL API untuk mengambil dan mengirim pesanan

  constructor() {}

  // Fungsi untuk mengambil data pesanan menggunakan Axios
  async getPesanan() {
    try {
      const token = localStorage.getItem('authToken');  // Ambil token dari localStorage

      if (!token) {
        throw new Error('Token tidak ditemukan, Anda harus login terlebih dahulu.');
      }

      const response = await axios.get<Pesanan[]>(this.apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,  // Menambahkan token pada header
        },
      });

      return response.data;  // Mengembalikan data pesanan
    } catch (error) {
      console.error('Gagal mengambil data pesanan:', error);
      throw error;  // Lempar error agar bisa ditangani di komponen yang memanggil fungsi ini
    }
  }

  // Fungsi untuk mengirim data pesanan menggunakan Axios
  async addPesanan(pesanan: Pesanan) {
  try {
    const token = localStorage.getItem('authToken');  // Ambil token dari localStorage
    if (!token) {
      throw new Error('Token tidak ditemukan, Anda harus login terlebih dahulu.');
    }

    // Create a new FormData object to send as multipart/form-data
    const formData = new FormData();
    
    // Append form data for the other fields
    formData.append('deskripsi', pesanan.deskripsi);  // Deskripsi
    formData.append('shift', pesanan.shift);          // Shift ('1', '2', or '3')
    formData.append('nama_makanan', pesanan.nama_makanan);  // Nama Makanan
    formData.append('porsi', pesanan.porsi.toString());      // Porsi
    formData.append('untuk_tanggal', pesanan.untuk_tanggal); // Tanggal Pesanan

    // If there is a photo, append it to FormData
    if (pesanan.foto) {
      formData.append('foto', pesanan.foto);
    }

    // Send the FormData to the backend via POST
    const response = await axios.post(this.apiUrl, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,  // Pass token in Authorization header
        'Content-Type': 'multipart/form-data',  // Ensure Content-Type is multipart/form-data
      },
    });

    // Return the response (newly created Pesanan object, including ID)
    return response.data;  // This should return the newly created pesanan with its ID
  } catch (error) {
    console.error('Gagal mengirim data pesanan:', error);
    throw error;  // Throw error to be caught by the calling component
  }
}

}
