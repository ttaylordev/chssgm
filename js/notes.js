// angular.module('carFire').controller('carsCtrl', function($scope, carsSvc) {
//   $scope.cars = carsSvc.getCars();
//   $scope.createNewCar = function(newCar) {
//     carsSvc.addCar(newCar);
//   };
// });
// controller houses whatever you want to set your scopes to,
// directing to functions that you want to return,
// direct factories and services
// stores data on the $scope
// handles traffic from the service, directives, app, and factories


//cole's chatbox is a directive with it's own html page, and how to render



// directive places html into the view
// allows for finite modularity, by passing providing
//  a place for its controller to output commands to.
// houses the {{placeholders}} that access the $scope
// a directive for every good block of html on the page



controller: function($scope) {
  console.log('nested controller within loginDir is logging');
  $scope.working = 'loginDirective is working with a nested controller';
}




angular.module('carFire').service('carsSvc', function($firebaseObject, $firebaseArray) {
  var url = '<YOUR_FIREBASE_URL_GOES_HERE>';

  this.addCar = function(newCar) {
    var ref = new Firebase(url + 'cars')
    return $firebaseArray(ref).$add(newCar);
  }

  this.getCars = function() {
    var ref = new Firebase(url + 'cars')
    return $firebaseArray(ref);
  }

  this.getCar = function(carId) {
    var ref = new Firebase(url + 'cars/' + carId)
    return $firebaseObject(ref);
  }

  this.getComments = function(carId) {
    var ref = new Firebase(url + 'comments/' + carId);
    return $firebaseArray(ref);
  }
});


// angular.module('carFire').service('carsSvc', function($firebaseObject, $firebaseArray) {
//   var url = 'https://carfire.firebaseio.com/';

this.addCar = function(newCar) {
  var ref = new Firebase(url + 'cars');
  return $firebaseArray(ref).$add(newCar);
};

this.getCars = function() {
  var ref = new Firebase(url + 'cars');
  return $firebaseArray(ref);
};

this.getCar = function(carId) {
  var ref = new Firebase(url + 'cars/' + carId);
  return $firebaseObject(ref);
};

this.getComments = function(carId) {
  var ref = new Firebase(url + 'comments/' + carId);
  return $firebaseArray(ref);
};

// service can't access scope, they can handle what
//   has been pass in or declared in service
// handles traffic to external data sources
// contains the functions that the controller uses
//   to pass into the scope
