const nilaiSekolah = 50
let grade = ""

// if(nilaiSekolah > 70){
//     console.log('selamat anda lulus!');
// }else{
//     console.log('maaf anda belum lulus!');
// }

// if(nilaiSekolah > 85){
//     grade = "A"
// }else if(nilaiSekolah > 75){
//     grade = "B"
// }else if(nilaiSekolah > 60){
//     grade = "C"
// }else if(nilaiSekolah > 40){
//     grade =  "D"
// }else{
//     grade = "E"
// }

// console.log(grade);

// const kodeHari = new Date('01-01-2024').getDay()
// let hari = ""

// switch(kodeHari){
//     case 0:
//         hari = "minggu"
//         break;
//     case 1:
//         hari = "senin"
//         break;
//     case 2:
//         hari = "selasa"
//         break;
//     case 3:
//         hari = "rabu"
//         break;
//     case 4:
//         hari = "kamis"
//         break;
//     case 5:
//         hari = "jumat"
//         break;
//     case 6: 
//         hari = "sabtu"
//         break;
//     default:
//         hari = "maaf anda salah memasukan nilai hari"
// }

// console.log(hari);

const keterangan = nilaiSekolah > 70 ? 'Selamat Anda lulus!': 'maaf anda belum lulus!'
console.log(keterangan);