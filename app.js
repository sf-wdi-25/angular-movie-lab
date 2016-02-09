console.log('app.js loaded!');

var app = angular.module("movieApp", []);
app.controller("movieController", movieController);

function movieController(){
  var vm = this;

  vm.moviesToWatch = [
  {
    title: "Toy Story"
  },
  {
    title: "Despicable Me"
  },
  {
    title: "Cinderella"
  },
  {
    title: "The Little Mermaid"
  },
  {
    title: "The Mission"
  },
  {
    title: "The Saratov Approach"
  },
  {
    title: "Aladdin"
  }];

  vm.text = "";

  vm.addMovie = function() {
    if (vm.text) {
      vm.moviesToWatch.push({ title: vm.text });
      vm.text = '';
    }
  };
}