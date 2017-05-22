angular.
  module('locList').
  component('locList', {
    templateUrl: 'loc-list/loc-list.template.html',    
    controller: function LocListController() {
      this.locs = [
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
    }
  });