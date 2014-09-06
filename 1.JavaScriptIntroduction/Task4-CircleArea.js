function circleArea() {
    var radius = document.getElementById('radius').value;
    document.body.innerHTML +="<br/> area = " + (Math.PI * Math.pow(radius, 2)) + "<br/>";
}