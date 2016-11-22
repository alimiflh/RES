
	angular.module("app").directive("gallery",gallery)
	function gallery ($http) {
	  return{
	  	replace:true,
	  	templateUrl:"/home.html",
	  	
	  }
	};
