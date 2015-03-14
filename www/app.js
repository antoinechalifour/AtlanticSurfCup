(function(){
  'use strict';

  new WOW().init();

  angular.module('ASC', ['ASC.core', 'ASC.home', 'ASC.about', 'ASC.sponsors', 'ASC.contact']);
})();