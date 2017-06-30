
angular.
  module('sportguideApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
     

      $routeProvider.
        when('/locs', {
          template: '<loc-list></loc-list>'
        }).
        when('/locs/:locId', {
          template: '<loc-detail></loc-detail>'
        }).

        // when('/events', {
        //   templateUrl: 'events.html'          
        // }).

        otherwise('/locs');
    }
  ]);