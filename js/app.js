var app = angular.module("movieFun", []);

app.controller("MovieController", MovieController);

function MovieController(){

	var vm = this;

	vm.user = {
		name: "Doug"
	};

  vm.movieList =[
  {
  	id: 1,
  	name: "Matrix",
  	year: 1999 
  },
  {
  	id: 2,
  	name: "Groundhogs Day",
  	year: 1993
  },
  {
  	id: 3,
  	name: "The Social Network",
  	year: 2010
  }
  ];
}