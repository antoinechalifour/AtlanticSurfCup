(function(){
  'use strict';

  angular.module('ASC.about')

  .directive('ascAbout', function(){
    return {
      restrict: 'E',
      templateUrl: 'about/about.template.html'
    };
  })

  .directive('ascMaps', function(){
    return function(scope, element, attrs){
      console.log('totot');
      var mapOptions = {
        center: { lat: 46.6071, lng: -1.8548},
        zoom: 16,
        scrollwheel: false
      };
      element.css('width', attrs.width);
      element.css('height', attrs.height);
      var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);
    };
  })
})();