import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Import RouterTestingModule untuk simulasi routing
      providers: [AuthGuard]  // Menyuntikkan AuthGuard
    });

    guard = TestBed.inject(AuthGuard);  // Dapatkan instance AuthGuard
    router = TestBed.inject(Router);    // Dapatkan instance Router
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();  // Memastikan AuthGuard diinisialisasi dengan benar
  });

  it('should navigate to /home if token is not present', () => {
    localStorage.removeItem('authToken');  // Hapus token di localStorage
    spyOn(router, 'navigate');  // Mock method navigate

    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBe(false);  // Harus menampilkan false karena token tidak ada
    expect(router.navigate).toHaveBeenCalledWith(['/home']);  // Memastikan navigasi ke /home
  });

  it('should navigate to /karyawan if role does not match', () => {
    localStorage.setItem('authToken', 'valid-token');  // Simulasikan token valid
    localStorage.setItem('role', 'user');  // Simulasikan role yang berbeda

    spyOn(router, 'navigate');  // Mock method navigate

    const result = guard.canActivate({ data: { role: 'admin' } } as any, {} as any);
    expect(result).toBe(false);  // Harus menampilkan false karena role tidak sesuai
    expect(router.navigate).toHaveBeenCalledWith(['/karyawan']);  // Memastikan navigasi ke /karyawan
  });

  it('should return true if token and role are valid', () => {
    localStorage.setItem('authToken', 'valid-token');  // Simulasikan token valid
    localStorage.setItem('role', 'admin');  // Simulasikan role yang sesuai

    const result = guard.canActivate({ data: { role: 'admin' } } as any, {} as any);
    expect(result).toBe(true);  // Harus mengembalikan true karena token dan role valid
  });
});
