// Distructuring variable / Assigement

//  Destructuring array
// const perkenalan = ["halo", "nama", "saya", "alwi"];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, satu, dua, nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// Rest Paramater
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring object
// const mhs = {
//   nama: "Muhammad Alwi",
//   umur: 20,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "Muhammad Alwi",
//   umur: 20,
// });
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//   nama: "Muhammad Alwi",
//   umur: 20,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

// memberikan default value
// const mhs = {
//   nama: "Muhammad Alwi",
//   umur: 20,
//   email: "alwi3479@gmail.com",
// };

// const { nama, umur, email = "emaildefault.com" } = mhs;
// console.log(nama);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Muhammad Alwi",
//   umur: 20,
//   email: "alwi3479@gmail.com",
// };

// const { nama: n, umur: u, email: e = "emaildefault.com" } = mhs;
// console.log(e);

//  Rest Parameters
// const mhs = {
//   nama: "Muhammad Alwi",
//   umur: 20,
//   email: "alwi3479@gmail.com",
// };

// const { nama, ...value } = mhs;
// console.log(e);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Muhammad Alwi",
  umur: 20,
  email: "alwi3479@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
