// Spreed Operator
// Memecah Litarables menjadi single element

// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ["alwi", "alya", "alfiah"];
// const dosen = ["ade", "hendra", "warda"];
// const orang = [...mhs, "Aji", ...dosen];
// const orang1 = mhs.concat(dosen);

// console.log(orang);

// Meng-Copy array
// const mhs = ["alwi", "alya", "alfiah"];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = "fajar";
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
