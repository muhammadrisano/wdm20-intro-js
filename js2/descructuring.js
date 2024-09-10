// untuk object
const biodata = {
    name: 'risano',
    email: "risano@mgail.com",
    jender: 'pria',
    age: 17,
    address: {
        city: 'padang',
        zipCode: 26000
    }
}

// const name = biodata.name
// const email = biodata.email
// const jender = biodata.jender
const {name, jender} = biodata
const {city, zipCode} = biodata.address

// console.log(zipCode);


// untuk array

const hobies = ['ngoding', 'gaming', 'swimming']

// const hobi1 = hobies[0]
// const hobi2 = hobies[1]
// const hobi3 = hobies[2]
// console.log(hobi2);

const [hobi1, hobi2, hobi3] = hobies

console.log(hobi2);