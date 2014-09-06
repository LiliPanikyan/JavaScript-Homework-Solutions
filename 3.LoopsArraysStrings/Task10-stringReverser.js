function reverseString(arr) {
    var reversed="";
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed+=(arr[i]);
    }
    console.log(reversed)
    
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');
