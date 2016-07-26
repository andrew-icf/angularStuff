app.filter('kebab', function(){
  return function(input){
    input.replace(/(_[0-9])/g , "-");
    return input;
  };
});

app.filter('camel', function(){
  return function(input) {
    input.replace(/[^\w\s]/gi, '');
    return input;
  };
});

app.filter('pigLatin', function(){
    function letters(word) {
    return word.split('');
    }

    function pigLatinizeWord(word) {
        var chars = letters(word);
        return chars.slice(1).join('') + chars[0] + 'ay';
    }

    function pigLatinizeSentence(sentence) {
        return sentence.replace(/\w+/g, pigLatinizeWord);
    }
    return sentence;
  });


app.filter('redact', function(){
  return function(input, word){
    var reg = new RegExp(word, "g");
    return input.replace(reg ,"REDACTED");
  };
});
