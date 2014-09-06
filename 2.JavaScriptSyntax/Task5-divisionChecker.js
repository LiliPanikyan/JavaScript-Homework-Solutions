function divisionBy3(number) {
    
    var sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    if (sum % 3 == 0) {
        return "The number is divided by 3 without remainder";
    }
    else {
        return "The number is NOT divided by 3 without remainder";
    }
}
console.log(divisionBy3(12));
console.log(divisionBy3(188));
console.log(divisionBy3(591));
console.log(divisionBy3(10));



