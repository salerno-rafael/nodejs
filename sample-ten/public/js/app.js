(function(){
	var app = angular.module('store',['panel-module']); 

	app.controller('StoreController',['$http', function($http){
		var store =this;

		$http.get('http://localhost:8081/list_products').success(function(data){
			
			store.products = data;
		});
	}]);	

})();