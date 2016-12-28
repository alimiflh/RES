(function() {
	var app = angular.module("app");

	app.config(function($routeProvider) {
		$routeProvider.when('/specials', {
			templateUrl : 'app/views/specials.html',
			controller : "logonctrl"
		}).when('/worker', {
			templateUrl : 'app/views/worker.html',
			controller : "logonctrl"
		}).when('/dessets', {
			templateUrl : 'app/views/dessets.html',
			controller : "logonctrl"
		}).when('/home', {
			templateUrl : 'app/views/home.html',
			controller : "logonctrl"
		}).when('/loginworkwer', {
			templateUrl : 'app/viewsworker/new_file.html',
			controller : "logonctrl"
		}).when('/ordercomplete', {
			templateUrl : 'app/viewsworker/ordercomplete.html',
			controller : "logonctrl"
		}).when('/about', {
			templateUrl : 'app/views/about.html',
			controller : "logonctrl"
		}).otherwise({
			redirectTo : '/home',
			
		});

	})
})();
