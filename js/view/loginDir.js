angular.module('app').directive('mainDirective', function(){
  //cole's chatbox is a directive with it's own html page, and how to render
  return {
      restrict: 'E', // restrict E is only as an element, A is attributes.it becomes the only way that you can call on that directive
      templateUrl: 'js/view/loginTmpl.js',
      // $scope:{
      //   currentUser: '=',
      // },
      // controller: 'chatCtrl'

  };
});
