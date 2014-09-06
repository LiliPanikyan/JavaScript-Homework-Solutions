
function isPrime(number) {
    for (var i = 2; i <= Math.sqrt(number) ; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log("Is number 7 prime? " + isPrime(7));
console.log("Is number 254 prime? " + isPrime(254));
console.log("Is number 587 prime? " + isPrime(587));
