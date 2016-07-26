app.filter('kebab', function(){
  return function(input){
    input.replace(/_[0-9]/g , "-");
  };
});

app.filter('camel', function(){
  return function(input) {
    input.replace(/_|-/g, "");
  };
});

app.filter('pigLatin', function(){
  return function(input){
  input.replace();  
  };
});
