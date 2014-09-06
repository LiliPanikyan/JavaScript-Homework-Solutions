function findNthDigit(arr) {
    var nthNumber = arr[0];
    var number = arr[1].toString().replace('.', '');
    var lenght = number.length;
    if (lenght < nthNumber) {
        return 'The number doesn’t have ' + nthNumber + ' digits';
    }
    else if (number.length === 1) {
        return number+ '\n';
    }
    else {
        var digit = number[number.length - nthNumber];
        return digit +'\n';
        
    }
    
}
console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));