// descration
const nama = "risano"

function sayHelo(name){
    console.log('helo world my name is ' + name);
}

// sayHelo(nama)

function penjulahan(nilai1, nilai2){
    const hasil = nilai1 + nilai2
    // console.log('helo bro...');
    return hasil
}

const hasilPenjumlahan = penjulahan(10, 30)


// expression

const pengurangan = function(val1, val2){
    const hasil = val1 - val2
    return hasil
}
const hasilPengurangan = pengurangan(100, 20)
// console.log(hasilPengurangan);


// arrow function
// const perkalian = (val1, val2)=>val1 * val2

const perkalian = (val1, val2)=>{
    const hasil = val1 * val2
    return hasil
}


const hasilPerkalian = perkalian(9, 5)
console.log(hasilPerkalian);