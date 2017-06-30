angular.
  module('locDetail').
  component('locDetail', {
    templateUrl: 'loc-detail/loc-detail.template.html',
    controller: ['$http', '$routeParams',
      function LocDetailController($http, $routeParams) {
      	var self = this;
      	 self.setImage = function setImage(imageUrl) {
      	 self.mainImageUrl = imageUrl;
   		 };

         $http.get('locs/' + $routeParams.locId + '.json').then(function(response) {
         self.loc = response.data;
         self.setImage(self.loc.images[0]);
      });
     }    
    ]
  });
