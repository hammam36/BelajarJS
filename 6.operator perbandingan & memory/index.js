// // ==
// console.log("1" == 1, "2" == 1) //membandingkan isi nilai, bukan tipe data
// // ===
// console.log("1" === 1) //membandingkan isi nilai dan tipe data
// // !=
// let admin = "hammam"
// console.log(admin != "hamma", admin != "hammam") //tidak boleh sama nilai, bukan tipe data
// // !==
// let addmin = "hammam"
// console.log(admin !== "hammam") //tidak boleh sama nilai dan tipe data
// // >
// console.log(3 > 3)
// // <
// console.log(1 < 2)
// // >=
// console.log(2 >= 1, 2>= 2)
// // <=
// console.log(2 <= 1, 2 <= 2)

// PERBEDAAN STACK MEMORY DENGAN HEAP MEMORY

// STACK MEMORY // MEMORY JANGKA PENDEK
let nama = "Bambang"
let nama2 = nama 
nama = "Bacok" // gk gianggap
console.log(nama2)

// HEAP MEMORY
let a = {
    nama: "udin"
}
let b = a
a.nama = "Slamet" // dianggap
console.log(b.nama)