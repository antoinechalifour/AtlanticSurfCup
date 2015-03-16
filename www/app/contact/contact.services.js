(function(){
  'use strict';

  angular.module('ASC.contact')

  .factory('Messages', ['$http', function($http){
    return function(data){
      return $http.post('/api/messages', data);
    };
  }]);
})();