// Define the `phonecatApp` module
var sportguideApp = angular.module('sportguideApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
sportguideApp.controller('LocListController', function LocListController($scope) {
  $scope.locs = [
    {
      name: 'Swimming pool',
      snippet: 'Fitnes Platinium. Gorodecka st. 16'
    }, {
      name: 'Swimming pool',
      snippet: 'University of economic. Gorodecka st. 16'
    }, {
      name: 'Jogging',
      snippet: 'Sport park. Zawislanska st. 20'
    }, {
      name: 'Jogging',
      snippet: 'Sport park. Pawia st. 6'
    }
  ];
});