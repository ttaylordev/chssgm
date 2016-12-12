angular.module('app')
  .service('loginSvc', function() {
    this.getLoginSvc = function() {
      var stringLoginSvc = 'loginSvc is also working';
      console.log('loginSvc is logging');
      return stringLoginSvc;
    };
  });
