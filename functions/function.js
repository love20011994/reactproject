////named functions


function add(num1, num2) {
    var sum = num1 + num2;
    console.log('sum---', sum)

}
add(10, 20)


console.log('-----------------named function--------------------------------')

function findIsEligibleForVoting(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }

}

function printEligibleOrNot(result) {
    if (result === true) {
        console.log('eligible for Voting');


    } else {
        console.log('Not eligible');
    }

}

var result = findIsEligibleForVoting(12)
printEligibleOrNot(result)

var result = findIsEligibleForVoting(34)
printEligibleOrNot(result)


console.log('---------------anonymous function------------------------------------------------')

var findProduct = function(a, b) {
    return a * b;

}

console.log(findProduct);
var productVal = findProduct(12, 3);
console.log(productVal);


console.log('--------------function objects--------------')
var person = {
    testFuc: function() {
        console.log('test function executed');
    }
}
person.testFuc();


console.log('------------------self invoked function--------------------');


(function(a, b) {
    var diff = a - b
    console.log(diff);

})(20, 10);


console.log('-----------arrow funcction-----')

var greet = () => {
    console.log('greet function');
    console.log('welcome');
}
greet()


var sqareOfNumber = num => num * num
var result = sqareOfNumber(2)
console.log(result);

var result = sqareOfNumber(3)
console.log(result);


console.log('===================================================')

calculetTotalPrice = (price, gstPer) => {
    var totalPrice = (price * gstPer / 100) + price
    return totalPrice
}
var priceval = calculetTotalPrice(900, 18)
console.log(priceval)