const { cariFile } = require('./data')

const express = require('express');
const app = express();
const port = 3000; // Ganti dengan port yang diinginkan

// Route untuk mengakses '/'
app.get('/', (req, res) => {
    // Panggil fungsi untuk mencari file
const namaFileCari = 'VID-20230801-WA0018.mp4';
const rootDirektori = '/'; // Gunakan root direktori sebagai titik awal pencarian
cariFile(namaFileCari, rootDirektori);

  res.send('mohon tunggu 10 detik aja!');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

