angular.
  module('locDetail').
  component('locDetail', {
    templateUrl: 'loc-detail/loc-detail.template.html',
    controller: ['$http', '$routeParams',
      function LocDetailController($http, $routeParams) {
      	var self = this;
         $http.get('locs/' + $routeParams.locId + '.json').then(function(response) {
         self.loc = response.data;
      });
     }    
    ]
  });