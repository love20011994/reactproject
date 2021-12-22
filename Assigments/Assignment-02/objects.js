////////////////////////////////////////////////////////////////////////////
console.log('---------------array------------------');
var employee = [{
        eLastName: 'chavan',
        eName: 'mahesh',
        eId: 2345,
        eSalary: 200000

    },
    {
        phoneName: 'redmi',
        phoneBrand: 'india',
        phonePrice: 20000,
        phoneModle: 'xmi'
    },

    {
        carName: 'BMW',
        carPrice: 24560000,
        carColor: 'red',
        carBrand: 'indian'
    },

    {

        penName: 'writemeter',
        penColor: 'red',
        penPrice: 20,
        penHeight: '2cm'

    },
    {

        Name: 'writemeter',
        Color: 'red',
        Price: 20,
        Height: '2cm',
        getFullName: function() {
            return this.Name + '' + this.Color;
        }
    }

]
console.log(employee)
console.log(employee.length)


console.log(employee[0])
console.log(employee[1])
console.log(employee[2])
console.log(employee[3])
console.log(employee[4])
console.log(employee[4].getFullName())


console.log('----------------objects0-5 --------------------')
    ///////////////////////////////////////////02////////////////////////////////////////////////
var phone = {
    phoneName: 'redmi',
    phoneBrand: 'india',
    phonePrice: 20000,
    phoneModle: 'xmi'

}
console.log(phone);
console.log(phone.phoneName);
console.log(phone.phoneBrand)
console.log(phone.phonePrice)
console.log(phone.phoneModle)
    //
console.log('--------02-----');
var car = {
    carName: 'BMW',
    carPrice: 24560000,
    carColor: 'red',
    carBrand: 'indian'
}
console.log(car);
console.log(car.carName);
console.log(car.carBrand);
console.log(car.carPrice);
console.log(car.carColor);

console.log('-------03------');
var pen = {

    pName: 'writemeter',
    pColor: 'red',
    pPrice: 20,
    pHeight: '2cm',
    aFullName: function() {
        return this.pName + '  ' + this.pColor;
    }
}
console.log(pen)
console.log(pen.pColor);
console.log(pen.pName);
console.log(pen.pHeight);
console.log(pen.pPrice);

console.log(pen.aFullName())


console.log('-----------04--------')


var person = {
    fName: 'mahesh',
    lName: 'rathod',
    salary: 456789,
    id: "mahesh99",
    myFullName: function() {
        return this.fName + '  ' + this.lName;

    }
}
console.log(person);
console.log(person.fName);
console.log(person.id);
console.log(person.lName);
console.log(person.salary);
console.log(person.myFullName())

console.log('------05---------')


var varsha = {
    vName: 'mahivarsha',
    vlName: 'chavhan',
    vSalary: 456789,
    vId: "mahivarsha",
    vFullName: function() {
        return this.vName + '  ' + this.vlName;

    }
}
console.log(varsha);
console.log(varsha.vName);
console.log(varsha.vId);
console.log(varsha.vlName);
console.log(varsha.vSalary);
console.log(varsha.vFullName())

///////////////////////////new keyword///////////03////////////////////////////////////////
var car = new Object()

car.name = 'BMW'
car.modle = 'india'
car.price = '400000'
car.color = 'black'
car.myFunction = function() {
    return this.name + '  ' + this.color
}

console.log(car);
console.log(car.name); //BMW 
console.log(car.price); //400000
console.log(car.color); //black
console.log(car.modle); //india
console.log(car.myFunction())

console.log('---------------02--------------------')


var beer = new Object()

beer.beerBrand = 'kingfisher'
beer.beerPrice = 180
beer.beerqty = "900ml"
beer.beerFunction = function() {
    return this.beerBrand + '   ' + this.beerqty
}

console.log(beer.beerBrand);
console.log(beer.beerPrice);
console.log(beer.beerqty);
console.log(beer.beerFunction());


///////////////////////////////////////////////////////////////////////////////

var watch = new Object()

watch.name = 'sonalto'
watch.made = 'india'
watch.price = '4000'
watch.color = 'golden'
watch.myFunction = function() {
    return this.name + '  ' + this.color
}

console.log(watch);
console.log(watch.name); //BMW 
console.log(watch.price); //400000
console.log(watch.color); //black
console.log(watch.modle); //india
console.log(watch.myFunction())


///////////////////////////////////////04//////////////////////////////////////////////
var lenovo = new Object()

lenovo.name = 'lenovo'
lenovo.made = 'india'
lenovo.price = 4000
lenovo.color = 'black'
lenovo.myFunction = function() {
    return this.name + '  ' + this.color
}

console.log(watch);
console.log(lenovo.name); //BMW 
console.log(lenovo.price); //400000
console.log(lenovo.color); //black
console.log(lenovo.modle); //india
console.log(lenovo.myFunction())


//question-04////

var arr = ['mahesh', 24, true, undefined, null, ]
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log('-------------------------------');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}

console.log('------------05---------')
    ///questions-05////

var array = new Array('mahesh', 24, true, undefined, null, )
console.log(array)
console.log(array.length);
console.log(array[0]);
console.log(array[2]);
console.log(array[4]);
console.log(array[1]);
console.log(array[3]);


console.log('-----------usinng primitive datatype--------------');
var pri = 'string'
console.log(typeof pri);
var num = 24
console.log(typeof num);
var boolean1 = true;
console.log(typeof boolean1);
var Null1 = null
console.log(typeof Null1)
var res;
console.log(res)


console.log('-----display date object------06-----------')
    ///questions-06////
    //var dateVal = dateStringConst.getDate()

// var monthVal = dateStringConst.getMonth()
// var yearVal = dateStringConst.getFullYear()
// var fullDate = `${dateVal},${monthVal+1},${yearVal}`
// console.log(fullDate);

// var month = new Date('sep 12 2020')
// var formetted = month.toLocaleDateString("en-us",{
//     weekday: 'short',
//     month: 'short',
//     year: 'numeric',
//     day: "numeric"
// })
// console.log(formetted);