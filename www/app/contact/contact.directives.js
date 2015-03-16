(function(){
  'use strict';

  angular.module('ASC.contact')

  .directive('ascContact', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/contact/contact.template.html',
      controller: 'ContactCtrl'
    };
  });
})();