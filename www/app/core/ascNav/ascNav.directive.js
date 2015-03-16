(function(){
  'use strict';

  angular.module('ASC.core')

  .directive('ascNav', ['$window', function($window){
    return {
      restrict: 'E',
      templateUrl: 'app/core/ascNav/ascNav.template.html',
      controller: 'AscNavCtrl',
      link: function(scope, element, attrs){
        var header = element.children(0);
        var windowEl = angular.element($window);
        var headerFixed = angular.element('.navbar.navbar-default');
        var body = angular.element('body');
        var limit = windowEl.height() - header.outerHeight();
        // var limit = 0;
        
        var handler = function(){
          if ((headerFixed.length > 0)) { 
            if((windowEl.scrollTop() > limit) && (windowEl.width() > 767)) {
              body.addClass("fixed-header-on");
            } else {
              body.removeClass("fixed-header-on");
            }
          };
        }

        windowEl.bind('resize', function(){
          limit = 0;
          handler();
        });

        windowEl.bind('scroll', handler);

        windowEl.bind('load', handler);
      }
    };
  }])

  .controller('AscNavCtrl', ['$scope', function($scope){
    var slogans = [
      'L\'instinct de la glisse.',
      'L\'ASC, ton meilleur pote.',
      'Et tu casses.',
      'J\'t\'ai cassé.',
      'Pas de violence, c’est les vacances !',
      'T\'es comme le « h » de hawaï, tu sers à rien.'
    ];

    var l = slogans.length;
    var rd = Math.floor(Math.random() * l);
    $scope.slogan = slogans[rd];
  }]);
})();