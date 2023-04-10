var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("pilih : gunting, batu, kertas");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gunting";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "kertas";
  } else {
    comp = "batu";
  }
  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gunting") {
    // if (comp == 'kertas'){
    //     hasil = 'Menang';
    // } else {
    //     hasil = 'kalah';
    // }
    hasil = comp == "kertas" ? "Menang!" : "Kalah";
  } else if (p == "kertas") {
    hasil = comp == "gunting" ? "Kalah" : "Menang";
  } else if (p == "batu") {
    hasil = comp == "kertas" ? "Kalah" : "Menang";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }
  // tampilkan hasilnya
  alert("Kamu memilih :  " + p + " dan komputer memilih : " + comp + " \nMaka hasilnya adalah : kamu " + hasil);
  tanya = confirm("lagi?");
}
alert("terimahkasih sudah bermain.");
