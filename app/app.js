
var sportguideApp = angular.module('sportguideApp', []);


sportguideApp.controller('LocListController', function LocListController($scope) {
  $scope.locs = [
    {
      name: 'Swimming pool',
      address: 'Fitnes Platinium. Gorodecka st. 16'
    }, {
      name: 'Swimming pool',
      address: 'University of economic. Gorodecka st. 16'
    }, {
      name: 'Jogging',
      address: 'Sport park. Zawislanska st. 20'
    }, {
      name: 'Jogging',
      address: 'Sport park. Pawia st. 6'
    }
  ];
});