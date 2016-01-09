angular.module('app').controller('mainCtrl', function($scope, mainSvc) {
  $scope.newFunc = function() {};
  $scope.testMainCtrl = 'mainCtrl is working'; //coming from
  $scope.mainSvc = mainSvc.getMainSvc();
  console.log('MainCtrl is logging');
});
// controller houses whatever you want to set your scopes to,
// directing to functions that you want to return,
// direct factories and services
// stores data on the $scope
// handles traffic from the service, directives, app, and factories
// calls in the service through injection
