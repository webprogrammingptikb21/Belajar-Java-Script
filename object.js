// membuat object
var mhs = {
  nama: "Muhammad Alwi",
  umur: 20,
  ips: [3.0, 2.5, 3.2],
  alamat: {
    jalan: "Balangtanaya",
    kota: "takalar",
    provinsi: "sulawesi selatan",
  },
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa("alwi", "210209501011", "alwi3479@gmail.com", "teknik informatika");

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa("alwii", "210209501010", "alwii2478@gmail.com", "teknik komputer");
