function checkBrackets(str) {
    var count = 0;

    for (var ch in str) {
        if (str[ch] == '(') {
            count++;
        }
        else if (str[ch] == ')') {
            count--;
        }

        if (count < 0) {
            break;
        }
    }

    if (count == 0) {
        return "correct";
    }
    else {
        return "incorrect";
    }
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
