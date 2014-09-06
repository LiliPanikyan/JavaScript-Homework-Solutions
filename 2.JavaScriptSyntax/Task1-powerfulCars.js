function convertKWtoHP(value) {
   return(value / 0.746).toFixed(2);
    
}
console.log("75kw = "+ convertKWtoHP(75)+ "hp");
console.log("150kw = " + convertKWtoHP(150) + "hp");
console.log("1000kw = " + convertKWtoHP(1000) + "hp");