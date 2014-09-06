function reverseWordsInString(str) {
    var arr = str.split(' '),
        result = '',
        word,
        i,
        j;

    for (i = 0; i < arr.length; i++) {
        word = arr[i];
        for (j = word.length - 1; j >= 0; j--) {
            result += word[j];
        }
        result += ' ';
    }

    console.log(result);
}

reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');