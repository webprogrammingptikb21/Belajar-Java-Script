// this
// var a = 10;
// console.log(window.a);

// Membuat Object

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this.halo();

// cara 2 - object literal
// var obj = {};
// obj.halo = function () {
//   console.log("halo");
// };
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function Halo() {
  console.log(this);
  console.log("halo");
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat
