var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
  console.log("angkot No. " + noAngkot + " beroperasi dengan baik.");
  noAngkot++;
}

for (var noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("angkot No. " + noAngkot + " Sedang Tidak Beroperasi. ");
}
