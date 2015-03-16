(function(){
  'use strict';

  angular.module('ASC.home')

  .controller('HomeCtrl', ['$scope', function($scope){
    var banners = [
      '/assets/img/banner.jpg',
      '/assets/img/banner2.jpg',
      '/assets/img/banner4.jpg'
    ];

    var l = banners.length;
    var rd = Math.floor(Math.random() * l);
    $scope.banner = banners[rd];
  }]);
})();