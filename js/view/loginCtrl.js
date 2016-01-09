angular.module('app').controller('loginCtrl', function($scope, loginSvc) {
  $scope.testLoginCtrl = loginSvc.getTested();
  // 'loginCtrl is working in separate file';
  console.log('loginCtrl is logging');
});
