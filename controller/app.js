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
