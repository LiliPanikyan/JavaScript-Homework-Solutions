function printNumbers(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) { 
        if (i % 4 !== 0 && i % 5 !== 0) {
            arr.push(i);
        }
           
    }
    arr.join(",");
    if (arr.length > 0) {
        return (arr);
    }
    else {
        return ('no');
    }
    
}
console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));