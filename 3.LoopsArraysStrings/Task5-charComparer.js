Array.prototype.equals = function (array, strict) {
    if (!array)
        return false;

    if (arguments.length == 1)
        strict = true;

    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i], strict))
                return false;
        }
        else if (strict && this[i] != array[i]) {
            return false;
        }
        else if (!strict) {
            return this.sort().equals(array.sort(), true);
        }
    }
    return true;
}

var arr1 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var arr2 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var arr3 = ['3', '5', 'g', 'd'];
var arr4 = ['5', '3', 'g', 'd'];
var arr5 = ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
var arr6 = ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];

console.log(arr1.equals(arr2));
console.log(arr3.equals(arr4));

console.log(arr5.equals(arr6));
