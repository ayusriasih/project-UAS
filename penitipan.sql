CREATE DATABASE penitipan_hewan;
USE penitipan_hewan;

CREATE TABLE penitipan (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama_pemilik VARCHAR(100),
  nama_hewan VARCHAR(100),
  jenis_hewan VARCHAR(50),
  layanan VARCHAR(100),
  tanggal_masuk DATE,
  tanggal_keluar DATE,
  harga INT,
  status VARCHAR(50)
);

INSERT INTO penitipan
(nama_pemilik, nama_hewan, jenis_hewan, layanan, tanggal_masuk, tanggal_keluar, harga, status)
VALUES
('Ayu', 'Milo', 'Anjing', 'Penitipan Harian', '2026-01-14', '2026-01-16', 80000, 'Dititipkan'),
('Putri', 'Kuro', 'Anjing', 'Penitipan Mingguan', '2026-01-14', '2026-01-21', 250000, 'Dititipkan');

SELECT * FROM penitipan;



