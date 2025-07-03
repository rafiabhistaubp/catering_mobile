import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'karyawan',
    loadChildren: () => import('./karyawan/karyawan.module').then( m => m.KaryawanPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'koki',
    loadChildren: () => import('./koki/koki.module').then(m => m.KokiPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'pesanan',
    loadChildren: () => import('./pesanan/pesanan.module').then( m => m.PesananPageModule),
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'scan',
    loadChildren: () => import('./scan/scan.module').then( m => m.ScanPageModule),
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'barcode',
    loadChildren: () => import('./barcode/barcode.module').then( m => m.BarcodePageModule),
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'laporan',
    loadChildren: () => import('./laporan/laporan.module').then( m => m.LaporanPageModule),
    canActivate: [AuthGuard],
    data: { role: 'admin' }
  },
  {
    path: 'barcodek',
    loadChildren: () => import('./barcodek/barcodek.module').then( m => m.BarcodekPageModule),
  },
  {
    path: 'form-pesanan',
    loadChildren: () => import('./form-pesanan/form-pesanan.module').then( m => m.FormPesananPageModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
