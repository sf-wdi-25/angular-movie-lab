console.log('app.js is loaded')
angular.module("movieApp", [])
	.controller("movieController", movieController);

function movieController() {
	var vm = this;

	vm.moviesToWatch = [
		{
			title: 'Love & Mercy',
			image: 'http://resizing.flixster.com/vIGB0RJE_TGMRP9kwydOkxdqySI=/683x1024/dkpu1ddg7pbsk.cloudfront.net/movie/11/19/14/11191463_ori.jpg'
		},

		{
			title: 'The Matrix',
			image: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'
		}
	]
};