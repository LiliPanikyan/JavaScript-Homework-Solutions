function replaceATag(str) {
    var regex = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;
    var output = str.replace(regex, '[URL$1]$2[/URL]');
    return output +'\n';
}
console.log(replaceATag(" <ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>"));
console.log(replaceATag("<div><a href='#'></a></div>"));