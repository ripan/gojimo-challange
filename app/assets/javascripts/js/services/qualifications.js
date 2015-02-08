//var qualificationIndexURL =  "http://gojimo-challange.dev/data/qualifications.json"
//var qualificationShowURL  =  "http://gojimo-challange.dev/data/qualifications.json/:id"

var qualificationIndexURL =  "https://api.gojimo.net/api/v4/qualifications"
var qualificationShowURL  =  "https://api.gojimo.net/api/v4/qualifications/:id"

services.factory('Qualification', ['$resource', '$routeParams', function($resource, $routeParams) {
	return $resource(qualificationIndexURL, {params: $routeParams}, {'query': {method: 'GET',isArray: true}});
}]);

services.factory('Qualification', ['$resource', '$routeParams', function($resource, $routeParams) {
	return $resource(qualificationShowURL, {params: $routeParams}, {
		'query': {
			method: 'GET',
			isArray: true
		}
	});
}]);


