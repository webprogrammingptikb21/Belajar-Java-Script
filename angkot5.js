var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
var angkotLembur = 8;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
}
