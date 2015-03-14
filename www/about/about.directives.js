(function(){
  'use strict';

  angular.module('ASC.about')

  .directive('ascAbout', function(){
    return {
      restrict: 'E',
      templateUrl: 'about/about.template.html'
    };
  })
})();