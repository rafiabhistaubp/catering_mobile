export interface Pesanan {
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
