import { Component } from '@angular/core';

interface Pesanan {
  nama: string;
  tanggal: string;
}

@Component({
  standalone:false,
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage {
  pesanan: Pesanan[] = [
    { nama: 'Ayam Bakar Madu', tanggal: '12 Mei 2027' },
    { nama: 'Sriwedari',        tanggal: '13 Juni 2025' },
    { nama: 'Ayam D’Celup',     tanggal: '18 Agustus 2026' },
    { nama: 'Ayam Nusantara',   tanggal: '20 Juni 2025' },
  ];
}
