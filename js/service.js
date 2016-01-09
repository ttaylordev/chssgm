angular.module('app').service('mainSvc', function() {
  this.getIce = function() {
    var ice = 'also working';
    return ice;
  };
}); // service can't access scope, they can handle what' been pass in or declared in service
