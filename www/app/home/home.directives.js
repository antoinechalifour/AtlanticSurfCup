(function(){
  'use strict';

  angular.module('ASC.home')

  .directive('ascHome', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/home/home.template.html',
      controller: 'HomeCtrl'
    };
  });
})();