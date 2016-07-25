app.controller('MadLib', function($scope){
  $scope.mad = function(dude, adjjj, pNoun1, pNoun2, insect, pNoun3, verb){
    $scope.showMadLib = true;
    $scope.customBoysName = dude;
    $scope.customAdj = adjjj;
    $scope.custompNoun1 = pNoun1;
    $scope.custompNoun2 = pNoun2;
    $scope.custominsect = insect;
    $scope.custompNoun3 = pNoun3;
    $scope.customverb = verb;
  }
  $scope.clear = function(){
    $scope.showMadLib = false;
    $scope.boysName = "";
    $scope.adj = "";
    $scope.pNoun1 = "";
    $scope.pNoun2 = "";
    $scope.insect = "";
    $scope.pNoun3 = "";
    $scope.verb = "";
  }

});
