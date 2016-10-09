(function(){
	var app=angular.module("app",[])
	app.controller("ctrl",ctrl);

function ctrl ($scope,$http){
	$http.get("data/data.json").success(function(response)
	{
		$scope.employe=response.workers;
		
	}
	
	)
$scope.dataclick=function(y){
	
	alert(y)
	
}
}

app.directive("ali",function(){
	return{
		templateUrl:"templates/templates.html",

					link : function(scope,element,attr) {

				scope.saveData = function() {
					console.log(scope)
					var data = {
						name : scope.nameInput,
						age : scope.ageInput,
					}
					var JSONdata = JSON.stringify(data);
					localStorage.setItem("data", JSONdata)

				}
				scope.getData = function() {
					var data = localStorage.getItem("data")
					var parsedData = JSON.parse(data);
					alert(parsedData.name);
				}
			}
	}
	
	
})

})();

