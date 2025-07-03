import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'; 
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-koki',
  templateUrl: './koki.page.html',
  styleUrls: ['./koki.page.scss'],
})
export class KokiPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: LoginService, private router: Router) {}
  
    async login() {
      try {
        
        const response = await this.authService.login(this.username, this.password);
        console.log('Login berhasil:', response);
  
        // Simpan token dan role di localStorage
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('role', response.role);  // Menyimpan role (admin/karyawan)
  
        // Arahkan ke halaman yang sesuai berdasarkan role
        const role = localStorage.getItem('role');
  
        if (role === 'admin') {
          this.router.navigate(['/dashboard']);  // Ganti dengan rute untuk dashboard admin
        } else if (role === 'karyawan') {
          this.router.navigate(['/barcodek']);  // Ganti dengan rute untuk dashboard karyawan
        }  else {
          // Arahkan ke halaman lain atau halaman default
          this.router.navigate(['/karyawan']);
        }
  
      } catch (error) {
        console.error('Login gagal:', error);
        // Tampilkan pesan error jika login gagal
      }
    }
  
    ngOnInit() {}
  }
