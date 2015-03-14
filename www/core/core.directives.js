(function(){
  'use strict';

  angular.module('ASC.core')

  .directive('ascRatio', ['$window', function($window){
    return function(scope, element, attrs){
      var handler = function(){
        var ratio = attrs['ratio'] || 1;
        var width = element.width();
        element.height(width * ratio);
      };
      
      var windowEl = angular.element($window);
      windowEl.bind('resize', handler);
      handler();
    };
  }])

  .directive('backstretch', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        console.log(attrs.backgroundUrl);
        $(element).backstretch(attrs.backgroundUrl);
      }
    };
  })

  .directive('fadeScroll', ['$window', function($window){
    return function(scope, element, attrs){
      var windowEl = angular.element($window);
      var from = attrs.fsFrom || 0;
      var to = attrs.fsTo || 100;
      var _op = attrs.fsOpacity || 1;

      var handler = function(){
        var scrolled = windowEl.scrollTop();
        var opacity = _op;
        if(scrolled > to) opacity = 0;
        else if(scrolled > from){
          opacity = _op - (scrolled - from) / (to - from);
        }
        element.css('opacity', opacity);
      };

      windowEl.bind('scroll', handler);

      handler();
    };
  }])

  .directive('parallax', ['$window', function($window){
    return function(scope, element, attrs){
      var windowEl = angular.element($window);
      var ratio = attrs.parallaxRatio || 0.1;

      var parent = element.parent();
      var parentY = parent.offset().top;

      var handler = function(){
        var yPos = -((windowEl.scrollTop() - parentY) * ratio);

        element.css('margin-top', yPos);
      };

      windowEl.bind('scroll', handler);

      handler();
    };
  }]);
})();