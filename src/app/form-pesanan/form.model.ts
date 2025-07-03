export interface Pesanan {
  id: number;
  deskripsi: string;
  nama_makanan: string;
  shift: '1' | '2' | '3';  // Enforcing 'shift' values to be '1', '2', or '3'
  porsi: number;
  untuk_tanggal: string;
  foto: File | null;
  fotoURL: string | null;
  fotoName: string | null;
}
