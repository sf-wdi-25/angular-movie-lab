console.log('app.js loaded!');

var app = angular.module("appMovie", []);
app.controller("movieController", movieController);

function movieController(){
  vm = this;

  vm.moviesToWatch = [
    {
      title: "The Matrix"
    },
    {
      title: "Iron Man"
    },
    {
      title: "Titanic"
    },
  ];

}
