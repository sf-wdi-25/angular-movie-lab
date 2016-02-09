console.log('app.js loaded!');

var app = angular.module('appMovie', []);
app.controller('movieController', movieController);

function movieController(){
  var vm = this;

  vm.title = 'add';
  vm.moviesToWatch = [
    {
      title: 'The Matrix'
    },
    {
      title: 'Iron Man'
    },
    {
      title: 'Titanic'
    },
  ];

  vm.addMovie = function() {
    if (vm.title) {
      vm.moviesToWatch.push({title: vm.title});
      vm.title = '';
    }
  };

}
