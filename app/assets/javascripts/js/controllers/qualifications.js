'use strict';

controllers.controller('QualificationsListController', ['$scope', '$routeParams', 'Qualification','Query','underscore',  function($scope, $routeParams, Qualification, Query, underscore) {
	$scope.qualifications = Qualification.query(function(data){
		$scope.uniqueSubjects = underscore.chain(data).pluck('subjects').flatten().indexBy('title').value();
	});
	$scope.query = Query;
	
}]);

controllers.controller('QualificationShowController', ['$scope', '$routeParams','Qualification', function($scope, $routeParams, Qualification) {
	$scope.qualification = Qualification.get({id: $routeParams.id}, function(qualification) {
		$scope.qualification = qualification;
	});
}]);