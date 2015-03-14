(function(){
  'use strict';

  angular.module('ASC.contact')

  .directive('ascContact', function(){
    return {
      restrict: 'E',
      templateUrl: 'contact/contact.template.html'
    };
  });
})();