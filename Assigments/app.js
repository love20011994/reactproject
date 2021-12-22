console.log('app file')
    // objects
var person = {
    firstName: 'mahesh',
    lastName: "chavan",
    age: 24,
    gander: 'male',
    isMarried: true,
    getFullName: function() {
        return this.firstName + " " + this.lastName

    }
}


const pName = person.firstName
console.log('First Name:', pName)

const lName = person.lastName
console.log('Last Name:', lName);

const pAge = person.age
console.log('age:', pAge);

const pGender = person.gander
console.log("gender:", pGender);

const pIsMarried = person.isMarried
console.log("Is Married:", pIsMarried)

const pFullName = person.getFullName()
console.log('full Nmae:', pFullName);

console.log(person["getFullName"]())





console.log('----------------------------------------')
var marker = {
    color: 'red',
    height: '10cm',
    price: 25
}

console.log(marker.color)
console.log(marker.height)
console.log(marker['price'])
console.log("---------------------------------------");


//
console.log("---------------------------------------")