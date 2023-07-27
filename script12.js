// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   succes: (movies) => console.log(movies),
// });

// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// .then(response => response.json())
// .then

// Promise
// object yang mempersentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji ( terpenuhui / ingkar)
// states (fulfiled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("janji telah ditepati!");
//   } else {
//     reject("ingkar janji");
//   }
// });
// janji1.then((response) => console.log("Ok! :" + response)).catch((response) => console.log("Not Ok!" + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve(" Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2);
// janji2
//   .finally(() => console.log("selesai Menunggu"))
//   .then((response) => console.log("Ok! :" + response))
//   .catch((response) => console.log("Not Ok!" + response));
// console.log("selesai");

// promoise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avangers",
        sutradara: "Alwi",
        pameran: "Alfiah, alya",
      },
    ]);
  }, 500);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Makassar",
        temp: "26",
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => console.log(response));
