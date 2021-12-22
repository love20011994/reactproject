console.log('date objects');
var systemDate = new Date()
console.log(systemDate);
console.log(systemDate.getHours()); //15
console.log(systemDate.getDay()); //2
console.log(systemDate.getMonth()); //11
console.log(systemDate.getFullYear()); //2021
console.log(systemDate.getTime()); //1640082381154
console.log(systemDate.getMinutes()); //
console.log(systemDate.getSeconds());

console.log('---------------------------');

var dateInMilliSeconds = new Date(8640000000)
console.log(dateInMilliSeconds);
console.log('------------- string constractor---------------');
var dateStringConst = new Date('december 12 2021')
console.log(dateStringConst)
console.log(dateStringConst.getDate())
console.log(dateStringConst.getMonth())
console.log(dateStringConst.getFullYear())


//dd/mm/yyyy
var dateVal = dateStringConst.getDate()
var monthVal = dateStringConst.getMonth()
var yearVal = dateStringConst.getFullYear()
var fullDate = `${dateVal}/${monthVal+1}/${yearVal}`
console.log(fullDate);


console.log('------yyyy/mm/dd/h/m/s/ml-----------------')
var dateObj1 = new Date(2021, 11)
console.log(dateObj1);


var dateObj2 = new Date(2021, 0, 11);
console.log(dateObj2);


var dateObj3 = new Date(2021, 0, 11, 5, 46, 8, 678);
console.log(dateObj3);
console.log(dateObj3.getMilliseconds());

console.log("------------------------------");

var months = ['jan', 'fab', 'mar', 'afril', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']
console.log(months);
var monthDate = months[monthVal]


var weeks = ['sun', 'mon', 'tue', 'wed', 'thus', 'fri', 'sat']
console.log(weeks)
var dayDate = weeks[dateVal]



var formentDate = `${dayDate},${monthDate},${dateVal},${yearVal}`
console.log(formentDate);
console.log('---------------------------');
// 
var dateObjVal = new Date()
var formettedDate = dateObjVal.toLocaleString('kan-in', {
    week: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
})
console.log(formettedDate)