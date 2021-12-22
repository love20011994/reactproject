var pens = {
    brand: 'renyload',
    color: 'black',
    price: 45
}
console.log(pens.brand);
console.log(pens.color);
console.log(pens.price);

for (var key in pens) {
    // console.log(key);
    console.log(`${key}-${pens[key]}`);

}


console.log('----Second time---');


var chenniSuperKing = {
    captan: 'ms dhoni',
    batsMan: 'virat',
    bowller: 'jadu'
}
console.log(chenniSuperKing.captan);
console.log(chenniSuperKing.batsMan);
console.log(chenniSuperKing.bowller);
console.log('-------------------------------');
for (var key in chenniSuperKing) {
    // console.log(key);
    console.log(`${key}-${chenniSuperKing[key]}`);

}

console.log('Third----- time');
var chenniSuperKing = {
    captan: 'ms dhoni',
    batsMan: 'virat',
    bowller: 'jadu'
}
console.log(chenniSuperKing.captan);
console.log(chenniSuperKing.batsMan);
console.log(chenniSuperKing.bowller);
console.log('--------------------------');
for (var key in chenniSuperKing) {
    // console.log(key);
    console.log(key);

}