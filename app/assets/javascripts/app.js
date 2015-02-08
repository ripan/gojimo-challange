
window.gojimoApp = angular.module('gojimoApp', [
  'templates',
  'ngUnderscore',
  'ngRoute', 
  'controllers', 
  'filters', 
  'services',
  'directives',
  ]);

window.controllers = angular.module('controllers', []);
window.services = angular.module('services', ['ngResource']);
window.filters = angular.module('filters', []);
window.directives = angular.module('directives', []);

gojimoApp.config([
  '$routeProvider',
  function($routeProvider) {
    return $routeProvider.
    when('/', {
      templateUrl: "home/index.html",
      controller: 'HomeController'
    })
    .when('/home', {
      templateUrl: "home/index.html",
      controller: 'HomeController'
    })
    .when('/qualifications', {
      templateUrl: "qualifications/index.html",
      controller: 'QualificationsListController'
    })
    .when('/qualifications/:id', {
      templateUrl: "qualifications/show.html",
      controller: 'QualificationShowController'
    })

    .when('/subjects', {
      templateUrl: "subjects/index.html",
      controller: 'SubjectsListController'
    })
    .when('/subjects/:id', {
      templateUrl: "subjects/show.html",
      controller: 'SubjectShowController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
  ]);

