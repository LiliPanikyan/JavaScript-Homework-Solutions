function displayProperties() {
    var properties = [];
    for (var index in window) {
        properties.push(index);
    }

    properties.sort();
    properties.join(' ');
    return(properties);
}

console.log(displayProperties());