console.log("-----01------")

function prime(num) {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
            count += 1
        }
    }

    if (count === 2) {
        console.log('prime Number');

    } else {
        console.log('Not a prime number');
    }
}
prime(9)

console.log('--------03------')

var prime1 = function(num) {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
            count += 1
        }
    }

    if (count === 2) {
        return 'prime Number';

    } else {
        return 'Not a prime number';
    }
}
console.log(prime1(2));
console.log(prime1(9));

console.log('----------03-');
(function(num) {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
            count += 1
        }
    }
    if (count === 2) {
        // return 'prime Number';
        console.log('prime number');

    } else {
        // return 'Not a prime number';
        console.log('Not a prime number ');
    }
})(2);


console.log('-------04----------')

var prime2 = num => {
    var count = 0;
    for (var i = 0; i <= num; i++) {
        if (num % i === 0) {
            count += 1
        }
    }
    if (count === 2) {
        // return 'prime Number';
        console.log('prime number');

    } else {
        // return 'Not a prime number';
        console.log('Not a prime number ');
    }
}
prime2(5)