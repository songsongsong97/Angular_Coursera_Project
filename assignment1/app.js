(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.lunchList = "";
  $scope.message = "";
  $scope.myStyle="";
  $scope.checkTooMuch = function(){
    var lunchList = $scope.lunchList.split(',');
    var lunchLength = lunchList.length;
    var actualLength = 0;
    for(var i =0;i<lunchLength;i++){
      if(lunchList[i]){
        actualLength++;
      }
    }
    if(actualLength===0){
      $scope.message = "Please enter data first";
      $scope.myStyle={'color':'red','border':'solid 1px red'};
    }
    else{
      $scope.myStyle={'color':'green','border':'solid 1px green'};
      if (actualLength >= 1 && actualLength <= 3){
        $scope.message = "Enjoy!";
      }
      else{
        $scope.message = "Too much!";
      }

    }
  }
};

})();
