 console.log('------for 0f loop-----value will be print--------------------');
 var numbers = [10, 20, 30, 40, 50]
 for (var number of numbers) {
     console.log(number);
 }

 console.log('----------------------------');
 var fruits = ['aaple', 'pineapple', 'greeapple', 'mango']
 for (var fruit of fruits) {
     console.log(fruit);
 }


 console.log('------for in loop-----index will print--------------------');


 var numbers = [10, 20, 30, 40, 50]
 for (var number in numbers) {
     console.log(number);
 }

 console.log('-----------loop of objects  using for key in loop--------------');
 var person = {
     fName: 'mahesh',
     lName: 'chavan',
     age: 24,
     gander: 'male'
 }
 for (var key in person) {
     console.log(person[key]);
 }
 console.log('------------key and value  printed------------');
 for (var key in person) {
     console.log(`${key}-${person[key]}`);
 }

 console.log('----------------------------------');
 for (var i in person) {
     console.log(`${i}-${person[i]}`);
 }
 console.log('---------------------');

 function test() {
     console.log('test function started');
     if (3 < 3) {
         console.log(i);

     } else {
         console.log('break');
     }
     console.log('test function ended');

 }
 test()
 console.log('---------------------------------');
 var arr = [10, 20, 30, 40, 50, , , , , , , , , , , , , 100]
 console.log(arr);
 for (var i = 0; i < arr.length; i++) {
     console.log(`${i}-${arr[i]}`);
 }
 console.log('-----------------------')
 for (var index in arr) {
     console.log(`${index}-${arr[index]}`);

 }
 console.log('--------------------');
 var arrData = [10, 20, 30]
 arrData[3] = 40
 arrData[4] = 50
 arrData['price'] = 720
 console.log(arrData);
 console.log('------using for loop');
 for (var i in arrData) {
     console.log(`${i}-${arrData[i]}`);

 }

 console.log('------------------------------------=--------');
 var pens = [{
         brand: 'parker',
         color: 'black',
         price: 25,
         type: 'ball pint pen'
     },
     {
         brand: 'Reynolds',
         color: 'blue',
         price: 210,
         type: 'ball pint pen'
     },
     {
         brand: 'Elkos',
         color: 'red',
         price: 5,
         type: 'gel pen'
     }
 ]
 console.log(pens)
 for (var i = 0; i < pens.length; i++) {
     if (pens[i].price > 5) {
         console.log(pens[i].price);
     }
 }
 console.log('-------------for of------------');
 for (var pen of pens) {
     if (pen.price > 5 && pen.type === 'ball pint pen') {
         console.log(pen)
     }
 }
 console.log('---------------for in----------------');
 for (var index in pens) {
     if (pens[index].brand.length > 5 && pens[index].price > 10) {
         console.log(pens[index]);
     }
 }