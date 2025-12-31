// OPERATOR LOGIKA

// && AND (harus benar keduanya)
console.log(2>1 && 3>2); // true
// || OR (harus salah satu benar)
console.log(2>1 || 3<2); // true
// ! NOT (Mengubah nilai menjadi lawan)
let bool = true
console.log(!bool)

// OPERATOR TERNARY (hanya untuk number, karena kalau string tidak memiliki nilai)
// hanya bisa 2 kondisi
let umur = 15
let hafalan = "30 juz"
let persyaratan = (umur == 18 && hafalan === "30 juz") ? "boleh masuk" : "tidak boleh masuk"
console.log(persyaratan)

let nilaiHammam = 70
let hafalanHammam = 30
let syaratLulus = (hafalanHammam == 10 && nilaiHammam >= 60) ? "lulus" : 'tidak lulus'
console.log(syaratLulus)

// tugas 1
let nilaiSiswa = 100
let hafalanSiswa = 100
let syaratLulusSekolah = (nilaiSiswa >= 80 && hafalanSiswa >= 80) ? "Siswa Lulus" : "Siswa tdk Lulus"
console.log(syaratLulusSekolah)

// tugas 2
let nilaiMahasiswa = 1000
let sertifikatMahasiswa = 1000
let syaratBeasiswa = (nilaiMahasiswa === "100" || sertifikatMahasiswa >= 100) 
? "Mahasiswa mendapatkan beasiswa" : "Mahasiswa tidak mendapatkan beasiswa"
console.log(syaratBeasiswa)

// pake object
let orangGila  = {
    status: "Miliarder",
    warnaKulit: "Hitam"
}
let standarOrang = orangGila.status == "Triliuner" || orangGila.warnaKulit == "Hitam" ? "Orang Gila" : "Orang Biasa"
console.log(standarOrang)

// pake ! NOT
let nilai = 0
let syaratLolos = !nilai ? "Anda Lolos" : "Anda tdk Lolos"
console.log(syaratLolos) // karena nilai 0 maka akan menjadi true