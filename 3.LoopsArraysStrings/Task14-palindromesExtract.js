function findPalindromes(str) {
    var arr = str.split(/[^a-zA-z]+/);
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var word = arr[index].toLowerCase();
        var reversedWord = '';
        for (var y = word.length ; y > 0 ; y--) {
            reversedWord += word.charAt(y - 1)
        }
        if(word == reversedWord){
            result.push(word);
        }
    }
    return result.join(', ');
}

console.log(findPalindromes('There is a man, his name was Bob'));
