import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('authToken');  // Ambil token dari localStorage
    const role = localStorage.getItem('role');        // Ambil role dari localStorage

    // Cek apakah token ada
    if (!token) {
      this.router.navigate(['/home']);  // Jika tidak ada token, arahkan ke halaman login atau home
      return false;
    }

    // Cek apakah role sesuai dengan yang dibutuhkan oleh rute
    if (next.data['role'] && next.data['role'] !== role) {
      this.router.navigate(['/karyawan']);  // Jika role tidak sesuai, arahkan ke halaman karyawan atau error
      return false;
    }

    return true;  // Izinkan akses jika token ada dan role sesuai
  }
}
