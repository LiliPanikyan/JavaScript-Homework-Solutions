function findMaxSequence(arr) {
    var i;
    var temp = [arr[0]];
    var maxSequence = [arr[0]];

    for (i = 1; i < arr.length; i += 1) {
        var currentElement = arr[i];
        var previousElement = arr[i - 1];

        if (currentElement > previousElement) {
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
    if (maxSequence.length === 1) {
        return('no')
    }else{
        return maxSequence;
    }
}
console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));