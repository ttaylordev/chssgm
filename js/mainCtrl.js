angular.module('app').controller('mainCtrl', function($scope, mainSvc){
  $scope.newFunc = function(){

  };
    $scope.test = 'working';
    $scope.ice = mainSvc.getIce();
    console.log('bob');
});
//controller houses whatever you want to set your scopes to, directing to functions that you want to return, direct factories and services
