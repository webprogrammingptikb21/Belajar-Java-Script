// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = "Muhammad";
// arr[1] = "Alwi";
// arr[2] = "Piaa";
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Muhammad", "Alwi", "Piaa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Muhammad", "Alwi", "Piaa"];

// for (var i = 0; i < arr.length; i++) {
//   console.log("mahasiswa ke - " + (i + 1) + " : " + arr[i]);
// }

// method pada array
// 1. join
// var arr = ["Muhammad", "alwi", "piaa"];
// console.log(arr.join(" - "));

// 2. push & pop
// arr.push("dody", "fitri");
// arr.pop();
// arr.pop();
// console.log(arr.join(" - "));

// 3. unshift & shift
// arr.unshift("dody");
// arr.shift();
// console.log(arr.join(" - "));

// 4. spilce
// splise(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2, ......)
// arr.splice(2, 0, "dody", "fitri");
// console.log(arr.join(" - "));

// 5. slice
// slice (awal, akhir)
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Muh", "Alwi", "Nova"];
// for (var i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke -" + (i + 1) + "adalah : " + e);
// });

// 7. Angka
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. sort
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// 9. fliter
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// var angka2 = angka.filter(function (x) {
//   return x == 5;
// });
// console.log(angka2);

// 10. find
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);
