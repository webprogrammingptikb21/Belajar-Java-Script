// function expression
// const tampilNama = function (nama) {
//   return `halo, ${nama}`;
// };
// console.log(tampilNama("alwi"));

// const tampilNama = (nama) => {
//   return `halo, ${nama}`;
// };
// console.log('alwi');

// const tampilNama = (nama, waktu) => {
//   return `selamat ${waktu} ${nama}`;
// };
// console.log(tampilNama("alwi", "malam"));

// impisit return
// const tampilNama = (nama) => `halo, ${nama}`;

// console.log("alwi");

// let mahasiswa = ["alwi", "erik", "dody"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);

// konsep this pada arrow function

// cunstruktur function
// const Mahasiswa = function () {
//   this.nama = "alwi";
//   this.umur = 20;
//   console.log(this);
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };
// const alwi = new Mahasiswa();

// arrow function
// const Mahasiswa = function () {
//   this.nama = "alwi";
//   this.umur = 20;
//   console.log(this);
//   this.sayHello = () => {
//     console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };
// const alwi = new Mahasiswa();

// object literal
// const mhs1 = {
//   nama: "alwi",
//   umur: 20,
//   sayHello: () => {
// console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "alwi";
//   this.umur = 20;
//   console.log(this);
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const alwi = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
