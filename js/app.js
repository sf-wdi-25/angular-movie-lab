console.log('Angular Movie -- app.js loaded!');

// app.js

angular
  .module('moviesApp', [])
  .controller('MoviesController', MoviesController);

  function MoviesController () {


    // this.test = 123
    // this.name = "Colbert"

    var vm = this; 

    console.log(vm);  

    vm.movieList = [
      {
        id: 1,
        name: 'Back to the Future',
        genre: 'Adventure'
      },
      {
        id: 2,
        name: 'Up',
        genre: 'Animation'
      },
      {
        id: 3,
        name: 'Spectre',
        genre: 'Action'
      },
      {
        id: 4,
        name: 'The Godfather',
        genre: 'Action'
      },
      {
        id: 5,
        name: 'Breakfast Club',
        genre: 'Drama'
      }
    ];

    console.log(this);
    vm.movie = {};
    vm.addMovie = function () {
      var newMovie = vm.movie;

      vm.movie = {};
      vm.movieList.push(newMovie);
    };  

    vm.deleteMovie = function (movie) {
      var movieIndex = vm.movieList.indexOf(movie);
      vm.movieList.splice(movieIndex, 1);
    };    
  };

