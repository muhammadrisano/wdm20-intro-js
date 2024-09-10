// number

const nilaiUN = 90;
const tinggiBadan = 162.5;
const suhuRuangan = -30;

const tahunLahir = 2005;
const tahunSekarang = 2024;

const umur = tahunSekarang - tahunLahir;
// console.log(umur);

// string

const nama = "risano";
const jender = "pria";
const alamat = `jl. Bla bla bla No. 120`;

const val = "100";

const phoneName = "081231231234";
const nik = "1412213123122";

// boolean -> true atau false
const isMerried = true;
const isLogin = false;
const isLulus = 80 > 75;

// console.log(isLulus);

// function
function sayHelo() {
  console.log("helo word");
}

// array

const hobies = ["ngoding", "joging", "gaming"];

// console.log(hobies[0]);

const nilaiSekolah = [80, 70, 75, 88];

// console.log(nilaiSekolah[2]);

// object

const biodata = {
  name: "risano",
  umur: 17,
  jender: "pria",
  isMerried: true,
  sayBro() {
    console.log("helo bro...");
  },
};

// console.log(biodata.jender);
// console.log(biodata['umur']);
// biodata.sayBro()

// null

let products = null;

products = [
  {
    name: "indomie ayam bawang",
    harga: 3000,
    stok: 2,
  },
  {
    name: "sarimi ayam kecap",
    harga: 4000,
    stok: 5,
  },
];

// console.log(products);

// undifined
let namaGame;

console.log(biodata.age);
