(function(){
  'use strict';

  angular.module('ASC.home')

  .controller('HomeCtrl', ['$scope', function($scope){
    var banners = [
      'home/img/banner.jpg',
      'home/img/banner2.jpg',
      'home/img/banner4.jpg'
    ];

    var l = banners.length;
    var rd = Math.floor(Math.random() * l);
    $scope.banner = banners[rd];
  }]);
})();