// Rest Parameters

// function myFunc() {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   return myArgs;
//   return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array destructuring
// const kelompok1 = ["alwi", "alya", "alfiah", "erik"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);

// Object desctructuring
// const team = {
//   pm: "alwi",
//   frontEnd: "alya",
//   backEnd: "alfiah",
//   uk: "hendra",
//   devOps: "ferry",
// };

// const { pm, ...myteam } = team;
// console.log(myteam);

// Flitering
function fliterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(fliterBy("number", 1, 2, "alwi", false, 10, true, "alya"));
