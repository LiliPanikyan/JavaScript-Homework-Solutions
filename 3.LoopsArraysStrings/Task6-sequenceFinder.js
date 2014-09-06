function findMaxSequence(arr) {
    
    var i;
    var temp = [arr[0]];
    var maxSequence = [arr[0]];

    for (i = 1; i < arr.length; i += 1) {
        var currentElement = arr[i];
        var previousElement = arr[i - 1];

        if (currentElement === previousElement) {
            temp.push(currentElement);
            if (i === arr.length - 1 && maxSequence.length <= temp.length) {
                maxSequence = temp;
            }
        } else {

            if (maxSequence.length <= temp.length) {
                maxSequence = temp;
            }
            temp = [currentElement];
        }
    }
    return maxSequence;
}
console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));