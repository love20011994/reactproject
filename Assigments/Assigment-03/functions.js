console.log('----array using for in and for of----');

var arr = [10, 20, 30, 40, 50]
console.log(arr);
console.log(arr.length);
console.log('-------for-of----------');
for (var array of arr) {
    console.log(array);
}
console.log('------for -in---------');
for (var array in arr) {
    console.log(array);
}

console.log("-------------second time-----------");


var car = ['BMW', 2000000, 'color', 'while', 'engin']
console.log(car);
console.log(car.length);
console.log('-------for-of----------');
for (var cars of car) {
    console.log(cars);
}
console.log('------for -in---------');
for (var cars in car) {
    console.log(cars);
    console.log(`${cars}-${car[cars]}`);
}

console.log("-------------Third time-----------");


var panWrite = ['renyload', 20, 'blue', 'price', 'black ball pen']
console.log(panWrite);

console.log(panWrite.length);
console.log('-------for-of----------');
for (var pens of panWrite) {
    console.log(pens);
}


console.log('------for -in---------');


for (var pens in panWrite) {
    console.log(pens);

}