import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-pesanan',
  templateUrl: './pesanan.page.html',
  styleUrls: ['./pesanan.page.scss'],
})
export class PesananPage {

  orders = [
    { jumlah: 2005, nama: 'Ayam Bakar Madu', tanggal: '12 Mei 2027' },
    { jumlah: 2070, nama: 'Sriwedari', tanggal: '13 Juni 2025' },
    { jumlah: 2070, nama: 'Ayam D’Celup', tanggal: '18 Agustus 2026' },
    { jumlah: 2070, nama: 'Ayam Nusantara', tanggal: '20 Juni 2025' },
  ];

  constructor() {}
}
