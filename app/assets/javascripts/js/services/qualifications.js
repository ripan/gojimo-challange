//var indexURL =  "http://gojimo-challange.dev/data/qualifications.json"
//var showURL  =  "http://gojimo-challange.dev/data/qualifications.json/:id"

var indexURL =  "https://api.gojimo.net/api/v4/qualifications"
var showURL  =  "https://api.gojimo.net/api/v4/qualifications/:id"

services.factory('Qualification', ['$resource', '$routeParams', function($resource, $routeParams) {
	return $resource(indexURL, {params: $routeParams}, {'query': {method: 'GET',isArray: true}});
}]);

services.factory('Qualification', ['$resource', '$routeParams', function($resource, $routeParams) {
	return $resource(showURL, {params: $routeParams}, {
		'query': {
			method: 'GET',
			isArray: true
		}
	});
}]);


