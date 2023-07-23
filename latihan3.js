// template literal
// const nama = "alwi";
// const umur = 20;
// console.log(`halo nama saya ${nama}, dan saya umur ${umur} tahun`);

// embeded expression
// console.log(`${1 + 1}`);
const x = 10;
console.log(`${x % 2 == 0 ? `genap` : `ganjil`}`);

// HTML fragments
const mhs = {
  nama: "alwi",
  umur: 20,
  nim: "210209501011",
  email: "alwi3479@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nim}</span>
</div>`;

console.log(el);
