function evenNumber(number){
    
    
    if (number % 2 == 0) {
        return"true";
    } else {
        return"false";
    }
}
console.log("Is number 3 even? " + evenNumber(3));
console.log("Is number 127 even? " + evenNumber(127));
console.log("Is number 588 even? " + evenNumber(588));