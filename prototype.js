// cara untuk membuat object pada javascript
// 1. object literal
// problem : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//   nama: "Muhammad Alwi",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat datang ${this.nama} Selamat makan!`);
//   },
// };
// let mahasiswa2 = {
//   nama: "Dody",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat datang ${this.nama} Selamat makan!`);
//   },
// };

// 2. function declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain!`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`halo ${this.nama}, selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let alwi = Mahasiswa("Alwi", 10);
// let alya = Mahasiswa("Alya", 10);

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `halo ${this.nama}, Selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `halo ${this.nama}, Selamat Bermain!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `halo ${this.nama}, Selamat Tidur!`;
// };

// let alwi = new Mahasiswa("Alwi", 10);

// versi class
class Mahasiswa {
  constructor(nama, energi){
    this.nama = nama;
    this.energi = energi;
  }
  makan(porsi) {
  this.energi += porsi;
  return `halo ${this.nama}, Selamat makan!`;
};

  main(jam) {
  this.energi -= jam;
  return `halo ${this.nama}, Selamat Bermain!`;
};

tidur(jam) {
  this.energi += jam * 2;
  return `halo ${this.nama}, Selamat Tidur!`;
}
}
let alwi = new Mahasiswa('alwi', 10);
// 3. constructor function
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama}, selamat bermain!`);
//   };
// }
// let alwi = new Mahasiswa("alwi", 20);

// 4. object.create
