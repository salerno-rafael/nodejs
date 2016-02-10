(function(){
	var app = angular.module('panel-module',[]);

		app.directive('panelTag',function(){
				return{
					restrict:'E',
					templateUrl:'panel-tag.html',
					controller:function(){
						this.tab = 1;

						this.selectTab = function(setTab){
							this.tab = setTab;
						};

						this.isSelected = function(checkTab){
							return this.tab === checkTab;
						};

					},
					controllerAs: 'panel'
				};
			});
		
})();