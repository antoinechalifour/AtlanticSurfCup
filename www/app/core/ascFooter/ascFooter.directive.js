(function(){
  'use strict';

  angular.module('ASC.core')

  .directive('ascFooter', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/core/ascFooter/ascFooter.template.html',
      controller: 'AscFooterCtrl'
    };
  })

  .controller('AscFooterCtrl', [function(){

  }]);
})();