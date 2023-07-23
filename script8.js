// for..of
// array
// const mhs = ["alwi", "alya", "alfiah"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "alwi";
// for (const n of nama) {
//   console.log(n);
// }

// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// });

// NodeList
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.innerHTML));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments

// function jumlahkanAngka() {
//   return arguments.reduce((a, i) => a + i);
// arguments.forEach(a => jumlah += a);
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: "alwi",
  umur: 20,
  email: "alwi3479@gmail.com",
};

for (m in mhs) {
  console.log(m);
}
