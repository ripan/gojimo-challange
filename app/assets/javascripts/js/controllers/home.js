'use strict';

controllers.controller('HomeController', ['$scope', function($scope) {
	$scope.text = "Welcome"
}]);

controllers.controller('HeaderController', ['$scope', function($scope) {
	$scope.hideRailsView = function(){
		$('.app-view.rails-view').hide();
	}
}]);