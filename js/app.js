console.log("Sanity check: Braaaaaaaiiiins");

angular
	.module("Moooovies", [])
	.controller("MoviesController", MoviesController);

function MoviesController() {

	var vm = this;

	vm.newMovieName = "";

	vm.moviesToWatch = [
		{
			name: "The Incredibles 2"
		},
		{
			name: "Despicable Me 3"
		},
		{
			name: "A Clockwork Orange"
		}
	];

function addMovie() {
	vm.moviesToWatch.push(newMovieName);
}

}