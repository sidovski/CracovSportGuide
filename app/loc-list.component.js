angular.
  module('sportguideApp').
  component('locList', {
    template:
        '<ul>' +
          '<li ng-repeat="loc in $ctrl.locs">' +
            '<span>{{loc.name}}</span>' +
            '<p>{{loc.address}}</p>' +
          '</li>' +
        '</ul>',
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