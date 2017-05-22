angular.
  module('locList').
  component('locList', {
    templateUrl: 'loc-list/loc-list.template.html',    
    controller: function LocListController() {
      this.locs = [
        {
      name: 'Comarch Basen',
      address: 'prof. Michała Życzkowskiego 29a',
      tags: ["Swimming","gym","sauna"]
    },  {
      name: 'Fitness Platinium',
      address: 'Pawia 5, Galeria Krakowska',
      tags: ["cardio machines","gym","sauna","workout","functional training","fitness"]
    },
     {
      name: 'Jatomi Fitness',
      address: 'Angel City, Szlak 77',
      tags: ["cardio machines","gym","fitness classes", "yoga","cycling","zumba"]
    },
     {
      name: '72D',
      address: 'Zakopianska 72D',
      tags: ["cross fit","gym","trx","weightlifting","sauna", "massage","personal trainings"]
    }
      ];
    }
  });