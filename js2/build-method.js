// sort -> digunakan untuk mensorting (mengurutkan) sebuah nilai

const nilaiUN = [30, 5, 8, 4, 2]
// const result = nilaiUN.sort((a, b)=> a-b)
const result = nilaiUN.sort((a, b)=> a-b)
// console.log(result);


// map -> untuk meloping nilai didalam array

const hobies = ['gaming', 'joging', 'swimming', 'ngoding']

// hobies.forEach((item, i)=>{
//     console.log(`hobi ke ${i} =  ${item}`);
// })

hobies.map((item, i)=>{
    console.log(`hobi ke ${i} =  ${item}`);
})

// const hobiesx = hobies.forEach((item)=>{
//     return `${item}X`
// })
// console.log(hobiesx);

// split -> untuk memecah dari sebuah string menjadi seubah array berhdasar pemisahkan / seperatornya

const teks = 'saya ingin menjadi programmer javascript'
const resultTeks = teks.split(' ')
const resultReverse = resultTeks.reverse()
console.log(resultReverse);


// join -> menggabungkan data array menjadi sebuah srtring berdasarka seperatornya

const resultJoin = resultReverse.join(' ')
console.log(resultJoin);
