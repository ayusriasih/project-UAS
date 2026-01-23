export interface Penitipan {
    id: number;
    nama_pemilik: string;
    nama_hewan: string;
    jenis_hewan: string;
    layanan: string;
    tanggal_masuk: string;   
    tanggal_keluar: string;
    harga: number;
    status: string;
}

export interface PenitipanCreate {
  nama_pemilik: string;
  nama_hewan: string;
  jenis_hewan: string;
  layanan: string;
  tanggal_masuk: string;
  tanggal_keluar : string;
  harga: number;
  status: string;
}

export interface PenitipanUpdate {
  nama_pemilik: string;
  nama_hewan: string;
  jenis_hewan: string;
  layanan: string;
  tanggal_masuk: string;
  tanggal_keluar : string;
  harga: number;
  status: string;
}