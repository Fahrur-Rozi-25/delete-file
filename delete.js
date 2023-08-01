const fs = require('fs');
const path = require('path');


function hapusFile(namaFile) {
    const pathFile = path.join(__dirname, 'data', namaFile); // Ganti 'nama_folder' dengan nama folder yang diinginkan.
  
    fs.unlink(pathFile, (err) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.log(`File '${namaFile}' tidak ditemukan.`);
        } else {
          console.error(`Terjadi kesalahan saat mencoba menghapus file '${namaFile}': ${err}`);
        }
      } else {
        console.log(`File '${namaFile}' berhasil dihapus.`);
      }
    });
  }
  
  module.exports = {
    hapusFile
  }