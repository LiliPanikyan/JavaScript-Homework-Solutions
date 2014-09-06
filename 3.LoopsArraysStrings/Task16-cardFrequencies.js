function findCardFrequency(str) {
    debugger;
    var input = str.toLowerCase().match(/\b\w+\b/g);
    
    var list = {};
    
    var result = 0;
    for (var i = 0; i < input.length; i++) {
        var times = 0;
        var key = input[i];
        for (var y = 0; y < input.length; y++) {
            if (input[i] === input[y]) {
                times++;
            }
        }
        list[input[i]] = times;
    }
    
    for (var key in list) {
        result += list[key];
        
    }
    
    var cardMap = '';
    
    for (var key in list) {
       cardMap+= (key + "- >" + ((list[key] / result) * 100).toFixed(2) + "%\n");
    }
    
    return cardMap;
}

console.log(findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦'));
console.log(findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠'));
console.log(findCardFrequency('10♣ 10♥'));
