'use strict';

angular.
  module('sportguideApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/locs', {
          template: '<loc-list></loc-list>'
        }).
        when('/locs/:locId', {
          template: '<loc-detail></loc-detail>'
        }).
        otherwise('/locs');
    }
  ]);