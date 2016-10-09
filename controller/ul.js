angular.module("app",[])
.controller("ctrl1",ctrl1)


function ctrl1($scope){
	$scope.name="המסעדה שלי";
	$scope.ul=["כניסת עובד","עיקריות","קינוחים ","מבצעים"];
}
