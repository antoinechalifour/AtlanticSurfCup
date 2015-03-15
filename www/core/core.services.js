(function(){
  'use strict';
  angular.module('ASC.core')

  .factory('CoreSponsors', ['$http', function($http){
    return $http.get('/api/sponsors');
  }]);
})();