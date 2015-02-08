'use strict';

controllers.controller('SubjectsListController', ['$scope', 'Subject','Query', function($scope, Subject, Query) {
  $scope.subjects = Subject.query();
  $scope.query = Query;
}]);

controllers.controller('SubjectShowController', ['$scope', '$routeParams', 'Subject', function($scope, $routeParams, Subject) {
  $scope.subject = Subject.query();
}]);