// index Java Script dimulai dari 0

// length untuk melihat jumlah huruf
let string = "javascript"
console.log(string.length)
let stringBaru = string[0]
console.log(stringBaru)

// Uppercase & Lowercase untuk transform
let upper = "khaizuran"
console.log(`${upper[0].toUpperCase()}${upper.slice(1)}`)
let upperBaru2 = upper.toUpperCase()
console.log(upperBaru2)
let upperBaru3 = upperBaru2.toLowerCase()
console.log(upperBaru3)

// Trim atau spasi
let stringTrim = "   javascript   "
let stringTrimBaru = stringTrim.trim()
console.log(stringTrimBaru)

// Slice untuk memotong
let motong = "hammammubarak"
console.log(motong.slice(6,13))
console.log(motong.substring(6))

// Replace untuk ngubah suatu karakter
let nuker = "javascript"
console.log(nuker.replace("java", "type"))
// tugas
let tugas = "javascript"
let tugasBaru = tugas[0].toUpperCase()
console.log(tugas.replace("j", "J"))

// Split untuk memisahkan string menjadi array
const array2 = "javascript,html,css"
let array = array2.split(",")
console.log(array)

// Join untuk menggabungkan array menjadi string
let aray = ["javascript", "html", "css"]
console.log(aray.join())

// indexOf untuk mencari index
let cari = "javascript html css"
console.log(cari.indexOf("html"))

// lastIndexOf untuk mencari index terakhir
let cari2 = "javascript html css html"
console.log(cari2.lastIndexOf("html"))

// includes untuk mencari ada atau tidak
let cari3 = "javascript html css"
console.log(cari3.includes("html"))