function treeHouseCompare(a, b) {
    var houseArea = (a * a) + (a * 2 / 3 * a) / 2;
    var treeArea = (b * 1 / 3 * b) + (Math.PI * Math.pow((2 / 3 * b), 2));
    if (houseArea > treeArea) {
        return "House/ " + houseArea.toFixed(2);
    }
    else {
        return "Tree/ " + treeArea.toFixed(2);
    }
}

console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));
console.log(treeHouseCompare(3, 1));