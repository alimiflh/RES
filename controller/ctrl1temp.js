/**
 * @author AliA
 */
(function() {
	angular.module("app").controller("ctrl1", ctrl1)

	function ctrl1($scope) {
		$scope.name = "המסעדה שלי";
		var orderBtTable = [];
		
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

			name : "קינוח גבינה פירורים בכוסות",
			img : "img/kinoh/gvina_perurim_sarit_i.jpg"
		}, {
			name : "3 טארטלטים",
			img : "img/kinoh/tartlet_krem_gvina_ribat_halav_c.jpg"
		}, {
			name : "מונט בלנק - ערמונים ושטרויזל פקאן",
			img : "img/kinoh/mountblanc_i.jpg"
		}, {
			name : " טרייפל שוקולד אישי",
			img : "img/kinoh/personal_chocolate_trifle_c.jpg"
		}, {
			name : "עוגות שוקולד אישיות",
			img : "img/kinoh/mini_choco_cakes1_c.jpg"
		}, {
			name : "סלסילות קדאיף עם קרם וניל",
			img : "img/kinoh/tusso_kadaif_dror_i.jpg"
		}]

		$scope.routeData = [{
			url : "worker",
			name : "כניסת עובד"

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

		$scope.clickFood = function(fodeName) {
			$scope.numTable
			orderBtTable.push(fodeName);
			console.log(orderBtTable);
			console.log($scope.numTable);
		}
		$scope.order = function() {
	$location.path("/ordercomplete");
};
	};

})();

