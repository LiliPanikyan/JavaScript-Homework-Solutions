Array.prototype.removeItem = function () {
    var index, arguments, temp;
    var len = arguments.length;
   
    while (len && this.length) {
        index = arguments[--len];
        while ((temp = this.indexOf(index)) !== -1) {
            this.splice(temp, 1);
        }
    }
    return this;
};
var arr = ['hi', 'bye', 'hello'];
console.log(arr.removeItem('bye'));
var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.removeItem(1));
