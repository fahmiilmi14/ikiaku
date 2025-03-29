// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('nama');
const hasil = urlParams.get('hasil');
const jurusan = urlParams.get('jurusan');
const asalSekolah = urlParams.get('asalSekolah'); // Tambahkan asal sekolah

// Tampilkan hasil di halaman hasil.html
document.getElementById("namaHasil").innerText = nama.toUpperCase();
document.getElementById("jurusanHasil").innerText = jurusan;
document.getElementById("asalSekolah").innerText = asalSekolah; // Tampilkan asal sekolah 

let banner = document.getElementById("resultBanner");
if (hasil === "lulus") {
    banner.className = "banner blue-banner";
    banner.innerHTML = "SELAMAT! ANDA DINYATAKAN LULUS RAMADHAN 2025"; 
    const gambar = document.createElement('img');
    gambar.src = 'qrcode.png';
    gambar.alt = 'Gambar Selamat Lulus';
    gambar.width = 80;
    gambar.height = 80;
    document.querySelector('.content').insertBefore(gambar, document.querySelector('.qr-code'));
    
} else {
    banner.className = "banner red-banner";
    banner.innerHTML = "ANDA DINYATAKAN TIDAK LULUS RAMADHAN 2025";
}
