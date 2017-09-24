var movieControllers = angular.module('movieControllers', ['ngAnimate']);

movieControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {

    $scope.movies = [
  {
    "title":"Madagascar",
    "actors":"Chris Rock, Ben Stiller, David Schwimmer",
    "director":"Eric Darnell, Tom McGrath",
    "description":"Spoiled by their upbringing and unaware of what wildlife really is, four animals from the New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar."
  },
    {
    "title":"Jumanji",
    "actors":"Robin Williams, Kirsten Dunst, Bonnie Hunt",
    "director":"Joe Johnston",
    "description":"When two kids find and play a magical board game, they release a man trapped for decades in it and a host of dangers that can only be stopped by finishing the game."
  },
    {
    "title":"Letters from Iwo Jima",
    "actors":"Ken Watanabe, Kazunari Ninomiya, Tsuyoshi Ihara ",
    "director":"Clint Eastwood",
    "description":"The story of the battle of Iwo Jima between the United States and Imperial Japan during World War II, as told from the perspective of the Japanese who fought it."
  }
]
    $scope.movieOrder = 'title';
	$scope.newMovietitle = '';
	$scope.newActors = '';
	$scope.newDirector = '';
	$scope.newDescription = '';

    $scope.submitUser = function() {
        $scope.movies.push({
		'title': $scope.newMovietitle,
		'actors': $scope.newActors,
		'director': $scope.newDirector,
		'description': $scope.newDescription,
        });
        $scope.newMovietitle = '';
    	$scope.newActors = '';
    	$scope.newDirector = '';
    	$scope.newDescription = '';
        }
    }
]);