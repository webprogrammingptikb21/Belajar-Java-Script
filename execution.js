// 2.1  EXECUTION CONTEXT, HOISTING & SCOPE
// console.log(nama);
// var nama = "alwi";

// creation phase pada global kontext
// nama var = underfined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// var nama = "alwi";
// var umur = 20;

// function sayHello() {
//   console.log(`halo nama saya ${nama}, saya ${umur} tahun.`);
// }

// function membuat local execution context
// yang ada didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = "Muhammad Alwi";
var username = "@mhmmdalwi";

function cetakURL(username) {
  var instagramURL = "http://www.instagram.com";
  return instagramURL + username;
}

console.log(cetakURL(username));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }

// a();
