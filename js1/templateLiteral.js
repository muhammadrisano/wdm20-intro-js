/* 
Nilai IPA saya 80
Nilai IPS saya 70
rata-rata dari kedua nilai adalah 75
*/

const nilaiIPA = 80
const nilaiIPS = 70

// menggunakan concate

const text = "Nilai IPA saya "+ nilaiIPA +"\nNilai IPS saya "+nilaiIPS + "\nrata-rata dari kedua nilai adalah "+ ((nilaiIPA + nilaiIPS) / 2)

// console.log(text);

// menggunakna template literal
const text2 = `Nilai IPA saya ${nilaiIPA}
Nilai IPS saya ${nilaiIPS}
rata-rata dari kedua nilai adalah ${(nilaiIPA + nilaiIPS) / 2}`

console.log(text2);