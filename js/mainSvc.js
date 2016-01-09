angular.module('app')
.service('mainSvc', function() {
  this.getMainSvc = function() {
    var mainSvc = 'mainSvc is also working';
    console.log('mainSvc is logging');
    return mainSvc;
  };
});
