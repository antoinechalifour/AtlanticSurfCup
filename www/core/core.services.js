(function(){
  'use strict';
  angular.module('ASC.core')

  .factory('CoreSponsors', [function(){
    var sponsors = [{
      name: 'Polytech Nantes',
      logo: 'sponsors/img/polytech/logo.png',
      description: 'Polytech description.',
      img: '',
      url: 'http://web.polytech.univ-nantes.fr/'
    },{
      name: 'Forum Atlantique',
      logo: 'sponsors/img/fa/logo.png',
      description: 'Forum Atlantique description.',
      img: '',
      url: 'http://www.forumatlantique.fr/'
    },{
      name: 'SII',
      logo: 'sponsors/img/sii/logo.png',
      description: 'SII description.',
      img: '',
      url: 'http://www.groupe-sii.com/fr'
    },{
      name: 'Red Bull',
      logo: 'sponsors/img/rb/logo.png',
      description: 'Red Bull description.',
      img: '',
      url: 'http://www.redbull.com/fr/fr'
    }];

    return sponsors;
  }])

  .factory('CorePhotos', [function(){
    var photos = [{
      link: 'photos/img/1.JPG'
    },{
      link: 'photos/img/2.JPG'
    },{
      link: 'photos/img/3.JPG'
    },{
      link: 'photos/img/4.JPG'
    },{
      link: 'photos/img/5.JPG'
    },{
      link: 'photos/img/6.JPG'
    },{
      link: 'photos/img/7.JPG'
    },{
      link: 'photos/img/8.JPG'
    },{
      link: 'photos/img/9.JPG'
    },{
      link: 'photos/img/10.JPG'
    },{
      link: 'photos/img/11.JPG'
    }];

    return photos;
  }]);
})();