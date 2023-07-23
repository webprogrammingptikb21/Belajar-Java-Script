// const mhs = {
//   nama: "muhammad alwi",
//   umur: 20,
//   nim: "210209501011",
//   email: "alwi3479@gmail.com",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nim}</span>
// </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Muhammad alwi",
//     email: "alwi3479@gmail.com",
//   },
//   {
//     nama: "Muhammad alwii",
//     email: "alwi3479@gmail.com",
//   },
//   {
//     nama: "Muhammad alwiii",
//     email: "alwi3479@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// 3. Condisional
// ternary
// const lagu = {
//   judul: "kau adalah",
//   penyanyi: "isyana saravati",
//   feat: "rayi putra",
// };

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul}${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// 4. Nexted
// HTML Fragment  bersarang

const mhs = {
  nama: "alwi",
  semester: 5,
  matakuliah: ["rekayasa web", "Analisis dan perancangan sistem Informasi", "pemrograman sistem interaktif", "Perancangan Sistem Berorientasi Object"],
};
function cetakMataKuliah(matakuliah) {
  return `
    <ol>
        ${matakuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.matakuliah)}
</div>`;

document.body.innerHTML = el;
