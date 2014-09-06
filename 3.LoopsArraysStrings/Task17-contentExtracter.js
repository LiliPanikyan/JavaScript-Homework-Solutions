function extractContent(str) {
    var output = str.replace(/(<([^>]+)>)/g, '');
    return output + '\n';
}
console.log(extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>"));
console.log(extractContent("<div>some <a href='#'>text</a></div> and some more text</>"));