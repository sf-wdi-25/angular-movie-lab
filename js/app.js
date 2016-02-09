console.log('Angular Movie -- app.js loaded!');

// app.js

angular
  .module('moviesApp', [])
  .controller('MoviesController', MoviesController);

  function MoviesController () {


    this.test = 123
    this.name = "Colbert"

    this.movieList = [
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
  };
