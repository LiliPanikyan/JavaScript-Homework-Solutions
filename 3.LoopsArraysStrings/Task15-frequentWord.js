function findMostFreqWord(str) {
    
    var words = str.toLowerCase().match(/\b\w+\b/g);
    var list = [];
    var maxTimes = 0;
    for (var index in words) {
        var word = words[index];
        if (list[word] === undefined) {
            list[word] = { word: word, times: 1 };
        }
        else {
            list[word].times++;
        }

        if (list[word].times > maxTimes) {
            maxTimes = list[word].times;
        }
    }

    var mostFrequentWords = [];

    for (var index in list) {
        if (list[index].times === maxTimes) {
            mostFrequentWords.push(list[index]);
        }
    }
    mostFrequentWords.sort(
        function(a, b){
            if(a.word < b.word) return -1;
            if(a.word > b.word) return 1;
        return 0;
    }
);

    for (var item in mostFrequentWords) {
        console.log(mostFrequentWords[item].word + " -> " + mostFrequentWords[item].times + " times");
    }
    console.log();
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');