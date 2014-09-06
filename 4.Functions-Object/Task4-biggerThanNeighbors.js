function biggerThanNeighbors(index, arr) {
    
    if (arr[index]===undefined) {
        return 'invalid index';
    }
    
    else {
        var digit = arr[index];
        var prevDigit = arr[index - 1];
        var nextDigit = arr[index + 1];
            if (prevDigit === undefined || nextDigit === undefined) {
                return 'only one neighbor';
            }
            else if (digit > prevDigit && digit > nextDigit) {
                return 'bigger';
            }
            else {
                return 'not bigger';
            }
    }
}
console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbors(4, [1, 2, 5, 3, 4]));