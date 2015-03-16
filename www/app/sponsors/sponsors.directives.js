(function(){
  'use strict';

  angular.module('ASC.sponsors')

  .directive('ascSponsors', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/sponsors/sponsors.template.html',
      controller: 'AscSponsorsCtrl'
    };
  })

  .controller('AscSponsorsCtrl', ['$scope', 'CoreSponsors', function($scope, CoreSponsors){
    CoreSponsors.success(function(sponsors){
      $scope.sponsors = sponsors;
    });
  }]);
})();