(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider
		.when('/specials', {
			templateUrl : 'views/specials.html'

		}).when('/worker', {
			templateUrl : 'views/worker.html',
			controller : "ctrl"
			//template:"<h1>this is about page</h1>"

		}).when('/dessets', {
			templateUrl : 'views/dessets.html',
		

		}).when('/home', {
			templateUrl : 'app/views/home.html',
			controller : "home"
			//template:"<h1>this is about page</h1>"

		}).otherwise({
			redirectTo : '/'
		});

	}

})();

