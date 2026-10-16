# Pride Studio Frontend

Frontend React + Vite untuk undangan digital Pride Studio.

## Jalankan lokal

1. Pastikan Node.js LTS terpasang.
2. Buka terminal di folder proyek.
3. Jalankan `npm install`.
4. Jalankan `npm run dev`.

## Yang tersedia pada versi ini

- Halaman Home, Acara, Fitur, Paket, Checkout, Katalog, Editor, Preview Undangan, Login, dan Dashboard.
- 62 template contoh dalam enam kategori: Pernikahan (12), Ulang tahun (10), Wisuda (10), Sempro/Semhas (10), Bukber & Khitanan (10), dan Acara kantor (10).
- Katalog mengharuskan pengguna melewati alur paket dan konfirmasi pembayaran demo terlebih dahulu.
- Editor contoh untuk teks, tanggal, lokasi, warna, serta pilihan dan preview musik latar.
- Tombol bantuan Instagram menggunakan akun `@bypride.studio`.

## Catatan sebelum produksi

- Pembayaran masih simulasi UI; sambungkan payment gateway dan verifikasi status transaksi di backend.
- Penyimpanan editor dan penerbitan URL undangan memerlukan API/backend serta database.
- Musik editor memakai URL audio contoh untuk preview. Sebelum rilis, ganti dengan audio yang lisensinya sudah dipastikan dan host file secara lokal/CDN milik sendiri.
- Cover template merupakan variasi desain awal; ganti dengan aset visual final untuk koleksi premium.
