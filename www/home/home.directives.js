(function(){
  'use strict';

  angular.module('ASC.home')

  .directive('ascHome', function(){
    return {
      restrict: 'E',
      templateUrl: 'home/home.template.html'
    };
  });
})();