// function init() {
// let nama = "Muhammad Alwi";
//   return function tampilNama(nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Muhammad");
// panggilNama("Alwi");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("alwi");

let add = function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
};

let a = add();
console.log(a());
console.log(a());
console.log(a());
