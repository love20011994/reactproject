function bbSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - 1 - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}
var arr = [2, 45, 6, 78, 90, 56, 7, 12, 100]
console.log(bbSort(arr));

console.log('-----------------------Ends----------------------------');

var funMa = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - 1 - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
funMa([2, 45, 6, 78, 90, 56, 7, 12, 100]);