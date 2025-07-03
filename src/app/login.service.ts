import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://qrdins.my.id/api/login';  // Ganti dengan URL API login

  constructor() {}

  // Fungsi untuk login menggunakan Axios dengan async/await
  async login(username: string, password: string) {
    try {
      const response = await axios.post(this.apiUrl, { username, password });
      console.log('Login berhasil:', response.data);

      // Memastikan bahwa respons mengandung token dan role
      if (response.data.token && response.data.role) {
        // Simpan token dan role di localStorage
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('role', response.data.role); // Menyimpan role
        const user_id = 'some_user_id_value';  // Ini adalah nilai user_id yang ingin Anda simpan
        localStorage.setItem('user_id', user_id);
        localStorage.setItem('user_id', response.data.user_id);  

        return response.data;
      } else {
        throw new Error('Token atau role tidak ditemukan dalam respons.');
      }
    } catch (error) {
      console.error('Login gagal:', error);
      throw error; // Lempar error agar bisa ditangani di komponen yang memanggil fungsi ini
    }
  }
}
