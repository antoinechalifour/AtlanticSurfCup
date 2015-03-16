(function(){
  'use strict';

  angular.module('ASC.core')

  .directive('ascSeparator', function(){
    return {
      restrict: 'E',
      scope: {
        backgroundUrl: '='
      },
      templateUrl: 'app/core/ascSeparator/ascSeparator.template.html'
    };
  });
})();