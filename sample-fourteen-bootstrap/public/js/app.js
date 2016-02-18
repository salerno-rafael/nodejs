(function(){
	var app = angular.module('store', ['angularUtils.directives.dirPagination']);

 app.controller('StoreController', function($scope,$http) {

  		$scope.currentPage = 1;
		  $scope.pageSize = 2;
		  $scope.products = [];

		var store =this;

		$http.get('http://localhost:8081/list_products').success(function(data){
			$scope.products = data;
			store.products = data;
		});
	});

	app.directive('productHeader',function(){
		return{
			restrict:'E',
			templateUrl:'product-header.html'
		};
	});

	app.directive('productHeaderAttribute',function(){
		return{
			restrict:'A',
			templateUrl:'product-header-attribute.html'
		};
	});

	app.controller('CommentController', function(){
		this.comment ={};

		this.addComment = function(product){
			product.comments.push(this.comment);
			this.comment ={};
		};

	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});


})();
