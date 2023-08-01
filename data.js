const fs = require('fs');
const path = require('path');



function cariFile(namaFile, direktori) {
  fs.readdir(direktori, (err, files) => {
    if (err) {
      console.error(`Terjadi kesalahan saat membaca direktori ${direktori}: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(direktori, file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(`Terjadi kesalahan saat memeriksa file ${filePath}: ${err}`);
          return;
        }

        if (stat.isDirectory()) {
          cariFile(namaFile, filePath); // Rekursif untuk mencari di sub-direktori
        } else if (file === namaFile) {

          console.log('File ditemukan:', filePath);
          fs.unlink(filePath, (err) => {
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
      });
    });
  });
}

// Ganti 'nama_file_yang_ingin_dihapus.txt' dengan nama file yang ingin Anda hapus.
module.exports = {
  cariFile,
}