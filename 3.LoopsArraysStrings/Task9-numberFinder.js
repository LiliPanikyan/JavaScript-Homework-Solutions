function findMostFreqNum(arr) {
    arr.sort();
    var i;
    var temp = [arr[0]];
    var max = [arr[0]];

    for (i = 1; i < arr.length; i += 1) {
        var currentElement = arr[i];
        var previousElement = arr[i - 1];

        if (currentElement === previousElement) {
            temp.push(currentElement);
            if (i === arr.length - 1 && max.length <= temp.length) {
                max = temp;
            }
        } else {

            if (max.length < temp.length) {
                max = temp;
            }
            temp = [currentElement];
        }
    }
    return (max[0]+'('+ max.length+" times"+')');
}
console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));