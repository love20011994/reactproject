// Array
var names = ['mahesh', 'chavan', 'ayush', 'shankar', 'rathod']
console.log(names);
console.log(names.length)


console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[5]);

console.log('-------------------------------');
for (var i = 0; i < 5; i++) {
    // debugger
    console.log('Hello');

}
console.log('------------------------------')
for (var i = 0; i < names.length; i++) {

    console.log(names[i]);

}




console.log('------------------------------------');
var myArray = ['mahesh', 24, true, undefined,
    null, { color: 'red' },
    ['ram', 'sita', 'hanuma']
]


console.log(myArray[2]); //ture
console.log(myArray[4]); // null
console.log(typeof myArray[3]); //undefined
console.log(myArray.length) //7
console.log(myArray[5].length) //undefined
console.log(myArray[5].color) //red
console.log(myArray[6]) //ram
console.log(myArray[6].length) //3
console.log(myArray[6][2 - 1]) //sita


console.log('-------------------------------------------');

var books = [{
        author: 'shankar rathod',
        title: 'javascript',
        price: 250,
        pages: 500,
        publisher: 'book house'


    },


    {
        author: 'mahesh',
        title: 'javascript',
        price: 250,
        pages: 500,
        publisher: 'book house'
    },

    {
        author: 'ayush',
        title: 'javascript',
        price: 250,
        pages: 500,
        publisher: 'book house'
    }
]

console.log(books);

console.log(books.length);


console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

console.log('----------------------------------');
for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
}
console.log('---------------------------------');
var array = new Array(10)
console.log(array.length) ///10
console.log(array[0]) // undefine
console.log('-----------------------------');




console.log('-------------------------------');
var arr = new Array(10, 20, 30)
console.log(arr.length);
console.log(arr[0]); //10
console.log(arr[1]); //20
console.log(arr[2]) //30
console.log('-----------------');



console.log('---------------------------------');
var color = new Array('blue')
console.log(color.length) //1or undefine
console.log(color[0]) // undefine 0r blue
console.log('-----------------------------');





console.log('----------------------------')
var car = new Object()
car.name = 'BMW'
car.modle = 'india'
car.price = '400000'
car.color = 'black'

console.log(car);
console.log(car.name); //BMW 
console.log(car.price); //400000
console.log(car.color); //black
console.log(car.modle); //india
console.log('----------------------------------');



console.log("--------------------------------------");




console.log("-------------------------------------");