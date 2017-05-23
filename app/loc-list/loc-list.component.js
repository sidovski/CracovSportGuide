angular.
  module('locList').
  component('locList', {
    templateUrl: 'loc-list/loc-list.template.html',    
    controller: function LocListController($http) {
      var self = this;
      $http.get('locs/locs.json').then(function(response) {
        self.locs = response.data;
      });
    }
  });