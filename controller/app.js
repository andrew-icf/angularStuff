var app = angular.module('firstApp',[]);

app.controller('MyFirstController', function($scope){
  $scope.name = "Severus Snape 2.0";
});

app.controller('ExercisesController', function($scope){
  $scope.FavColor = "blue";
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  $scope.rightNow = new Date();
});

app.controller('MainController', function($scope) {
  $scope.view = {} // this is commonly also called vm for ViewModel, we will see more about this later in the curriculum
  $scope.view.number = 42
});

app.controller('RandomNumber', function($scope){
  $scope.view = {};
  $scope.view.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
  $scope.reverseWord = function(word){
    $scope.view.word = word.split("").reverse().join('');
  }
});

app.controller('PingPong', function($scope){
  $scope.game = {};
  $scope.game.player1 = 0;
  $scope.game.player2 = 0;
  $scope.reset = function(){
    $scope.game.player1 = 0;
    $scope.game.player2 = 0;
  }
});
