angular.module('app').controller('loginCtrl', function($scope, loginSvc) {
  $scope.newFunc = function() {};
  $scope.testLoginCtrl = 'loginCtrl is working';
  $scope.loginSvc = loginSvc.getLoginSvc();
  console.log('loginCtrl is logging');

});
