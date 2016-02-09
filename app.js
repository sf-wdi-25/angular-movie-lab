console.log('app.js loaded!');

var app = angular.module('appMovie', []);
app.controller('movieController', movieController);

function movieController(){
  var vm = this;

  vm.max = 2;
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

  vm.showMax = function() {
    vm.max = false;
  };

  vm.deleteMovie = function(movie) {
    vm.moviesToWatch.forEach(function(ele, index, arr) {
      if(ele == movie) {
        arr.splice(index, 1);
      }
    });
  };


}
