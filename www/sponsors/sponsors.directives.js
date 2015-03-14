(function(){
  'use strict';

  angular.module('ASC.sponsors')

  .directive('ascSponsors', function(){
    return {
      restrict: 'E',
      templateUrl: 'sponsors/sponsors.template.html',
      controller: 'AscSponsorsCtrl'
    };
  })

  .controller('AscSponsorsCtrl', ['$scope', 'CoreSponsors', function($scope, CoreSponsors){
    $scope.sponsors = CoreSponsors;
  }]);
})();