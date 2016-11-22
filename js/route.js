(function() {
	var app = angular.module("app", ["ngRoute"]);

	app.config(function($routeProvider) {
		$routeProvider.when('/specials', {
			templateUrl : 'views/specials.html',
			controller : "logonctrl"

		}).when('/worker', {
			templateUrl : 'views/worker.html',
			controller : "logonctrl"
		}).when('/dessets', {
			templateUrl : 'views/dessets.html',
			controller : "logonctrl"
		}).when('/home', {
			templateUrl : 'views/home.html',
			controller : "logonctrl"
		}).when('/loginworkwer', {
			templateUrl : 'viewsworker/new_file.html',
			controller : "logonctrl"
		}).when('/ordercomplete', {
			templateUrl : 'viewsworker/ordercomplete.html',
			controller : "logonctrl"

		}).otherwise({
			redirectTo : '/'
		});

	})
	app.controller('logonctrl', function($scope, $location) {
		$scope.submit = function() {
			var uname = $scope.username;
			var password = $scope.password;
			if ($scope.uname == 'admin' && $scope.password == 'admin') {
				$location.path("/loginworkwer");
			} else {
				alert('שם ממשתמש אוו סיסמה לא נכונים ');
			}

		};
		$scope.name = "המסעדה שלי";
		var orderBtTable = {};

		$scope.dessets = [{
			name : "המבורגר",
			img : "img/1070049_500289180054938_2045821301_n.jpg"
		}, {
			name : "שניצל",
			img : "img/shutterstock_51423853_c.jpg"
		}, {
			name : "עוף עם אורז",
			img : "img/IMG_41813.jpg"
		}, {
			name : " פוטטו",
			img : "img/potato_casa.jpg"
		}, {
			name : "עוף עם אטריות",
			img : "img/IMG_95761.jpg"
		}, {
			name : "הלחם שלנו",
			img : "img/chala-for-shabbat-3-1321701.jpg"
		}]

		$scope.specials = [{

			name : " גבינה פירורים בכוסות",
			img : "img/kinoh/gvina_perurim_sarit_i.jpg",
			templateUrl : 'partials/home.html',
		}, {
			name : " טארטלטים",
			img : "img/kinoh/tartlet_krem_gvina_ribat_halav_c.jpg"
		}, {
			name : "מונט בלנק ",
			img : "img/kinoh/mountblanc_i.jpg"
		}, {
			name : " טרייפל שוקולד ",
			img : "img/kinoh/personal_chocolate_trifle_c.jpg"
		}, {
			name : "עוגות שוקולד ",
			img : "img/kinoh/mini_choco_cakes1_c.jpg"
		}, {
			name : " קדאיף עם קרם וניל",
			img : "img/kinoh/tusso_kadaif_dror_i.jpg"
		}]

		$scope.routeData = [{
			url : "worker",
			name : "כניסת עובד",

		}, {
			url : "about",
			name : "קצת עלינו"
		}, {
			url : "specials",
			name : "קינוחים"
		}, {
			url : "dessets",
			name : "עיקריות"
		}, {
			url : "home",
			name : "דף הבית"
		}]
		$scope.clickFoodup = function(fodeName) {
			$scope.numTable

			if (orderBtTable.hasOwnProperty(fodeName)) {
				orderBtTable[fodeName] = orderBtTable[fodeName] + 1;
			} else {
				orderBtTable[fodeName] = 1;
			}
			console.log(orderBtTable);

			localStorage.setItem(($scope.numTable), JSON.stringify(orderBtTable));
		}
		$scope.clickorder = function(numTable) {
			console.log(numTable);
			$scope.orderform = JSON.parse(localStorage.getItem(numTable));

		}

		$scope.clickFooddown = function(fodeName) {

			var tableObj = JSON.parse(localStorage.getItem($scope.numTable));
			if (tableObj[fodeName] && tableObj[fodeName] > 0) {
				tableObj[fodeName]--;
				if (tableObj[fodeName] === 0) {
					delete tableObj[fodeName];
				}
				orderBtTable = tableObj
				localStorage.setItem(($scope.numTable), JSON.stringify(tableObj));
			}
			// if (orderBtTable.hasOwnProperty(fodeName)) {
			// if (fodeName > 0) {
			// fodeName = fodeName-1;
			// if (fodeName == 0) {
			// delete thisIsObject[fodeName];
			// }
			// }
			// }
		};

		$scope.numTable2

		$scope.order = function() {
			$scope.orderp = orderBtTable;
			$location.path("/ordercomplete");

		};

	});

	jssor_slider1_starter = function(slider1_container) {
		var options = {
			$BulletNavigatorOptions : {
				$Class : $JssorBulletNavigator$,
				$ChanceToShow : 2
			}
		};
		var jssor_slider1 = new $JssorSlider$(containerId, options);
	};
})();

