# UTS Pemrograman Web

Nama: Zahra Meidinah Tahsya  
NIM: 240900001

# Link Project
- Repository GitHub:https://github.com/zahrameidinah-zm/uts-zahrameidinahtahsya-24090001.git
- GitHub Pages:

# Deskripsi Singkat

Project ini dibuat untuk memenuhi UTS mata kuliah Pemrograman Web.  
Aplikasi sederhana ini terdiri dari tiga halaman utama: Login, Dashboard, dan Products.  
Semua proses masih simulasi memakai JavaScript, tanpa backend ataupun database

# 1.Halaman Login (index.html)
Halaman pertama untuk masuk ke aplikasi.  
Form berisi email dan password (password diisi dengan NIM).

Fungsinya:
- Mengecek apakah kedua input sudah terisi.
- Jika ada yang kosong -> muncul pesan error.
- Jika benar -> muncul notifikasi “Login berhasil” dan halaman otomatis menuju dashboard.html.

# 2.Halaman Dashboard (dashboard.html)
Setelah login, pengguna diarahkan ke dashboard.

Di halaman ini ditampilkan 3 ringkasan:
- Total Produk  
- Total Penjualan  
- Total Revenue  

Angka-angkanya diambil dari data dummy pada file script.js.

Ada juga tombol “Lihat Data Produk” yang langsung menuju ke halaman daftar produk.

# 3.Halaman Products (products.html)
Halaman ini berisi tabel daftar produk.

Datanya juga diambil dari array dummy, misalnya:
- Kopi Gayo  
- Teh Hitam  
- Coklat Aceh  

Setiap baris produk punya dua aksi:
- Edit -> hanya menampilkan alert nama produk.
- Delete -> menampilkan konfirmasi. Jika setuju, barisnya dihapus dari tabel.


