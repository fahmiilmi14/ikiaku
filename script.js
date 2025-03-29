document.getElementById('lihat_hasil').addEventListener('click', function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    const tanggal = parseInt(document.getElementById('tanggal').value);
    const bulan = parseInt(document.getElementById('bulan').value);
    const tahun = parseInt(document.getElementById('tahun').value);

    if (isNaN(tanggal) || isNaN(bulan) || isNaN(tahun)) {
        alert("Harap isi semua bidang ini!");
        return;
    
    }

    let hasil = "tidak_lulus";
    let jurusan = "Masih ada kesempatan di Ramadhan 2026 (Kalau Masih Hidup)\n----------------------------------\nMinal Aidin Wal Faidzin\n mohon maaf lahir batin.";

    if (tanggal < 10 && bulan < 15 && tahun < 15) {
        hasil = "lulus";
        const jurusanRamadhan = [
    "S1 Ilmu Sabar Menunggu Bedug Maghrib",
    "S1 Manajemen Takjil dan Buka Bersama",
    "S1 Studi Perbandingan Antara Ngabuburit dan Rebahan",
    "S1 Teknologi Mudik dan Balik Kampung",
    "S1 Kajian Hilal dan Penentuan Hari Raya",
    "S1 Strategi Menghindari Godaan Gorengan",
    "S1 Ilmu Per-thr-an",
    "S1 Komunikasi Persuasif Kepada Panitia Masjid Agar Dapat Jatah Takjil Lebih",
    "S1 Perencanaan Keuangan Untuk Menghadapi Lebaran",
    "S1 Seni Melobi Tuhan",
    "S1 Studi Perbandingan Antara Ketupat dan Lontong",
    "S1 Ilmu Mencari Angpao di Keluarga Besar",
    "S1 Seni Bernegosiasi Agar Dapat Uang Lebaran Lebih",
    "S1 Strategi Menghindari Pertanyaan 'Kuliah dimana?'",
];
        
        jurusan = jurusanRamadhan[Math.floor(Math.random() * jurusanRamadhan.length)]+"\n----------------------------------\nSegera Lakukan Pemberian THR ke Fahmi \n----------------------------------\nMinal Aidin Wal Faidzin\n mohon maaf lahir batin.";
        
    }

    window.location.href = `hasil.html?nama=${encodeURIComponent(nama)}&hasil=${hasil}&jurusan=${encodeURIComponent(jurusan)}`;
});
