function clone(obj) {
    var objCopy = JSON.parse(JSON.stringify(obj));
    return objCopy;
}
function compareObjects(obj, objCopy) {
    console.log('a == b --> ' + (obj == objCopy));
}
var a = { name: 'Pesho', age: 21 };
var b = clone(a);
compareObjects(a, b);
var b = a; // not a deep copy
compareObjects(a, b);

