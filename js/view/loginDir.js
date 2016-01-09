angular.module('app')
  .directive('loginDirective', function() {
    var testLoginDirective = 'does using a var up here work in the loginDir?';
    return {
      restrict: 'E', // restrict E is only as an element, A is attributes.it becomes the only way that you can call on that directive
      templateUrl: 'js/view/loginTmpl.html',
      controller: 'loginCtrl',
      testLoginDirective: 'loginDirective is plugging into the loginTmple.html'
    };
  });
console.log('loginDir is logging outside of main function');
