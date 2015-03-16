(function(){
  'use strict';

  angular.module('ASC.contact')

  .controller('ContactCtrl', ['$scope', '$timeout', 'Messages', function($scope, $timeout, Messages){
    $scope.messageInfos = {};
    $scope.state = false;

    function clearState(delay){
      $timeout(function(){
        $scope.state = false;
      }, delay);
    }

    $scope.sendMessage = function(msgInfos){
      Messages(msgInfos)
      .success(function(data){
        $scope.messageInfos = {};
        $scope.state = 'success';
        $scope.messageForm.$setPristine(true);
        clearState(3000);
      })
      .error(function(err){
        $scope.state = 'error';
        clearState(10000);
      });
    };
  }]);
})();