(function(){
  'use strict';

  angular.module('ASC.contact')

  .controller('ContactCtrl', ['$scope', 'Messages', function($scope, Messages){
    $scope.messageInfos = {};
    $scope.sendMessage = function(msgInfos){
      Messages(msgInfos)
      .success(function(data){
        console.log(data);
      })
      .error(function(err){
        console.log(err);
      });
    }
  }]);
})();