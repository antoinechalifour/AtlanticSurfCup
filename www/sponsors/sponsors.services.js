(function(){
  'use strict';

  angular.module('ASC.sponsors')

  .factory('CoreSponsors', ['$http', function($http){
    return $http.get('/api/sponsors');
  }]);
})();