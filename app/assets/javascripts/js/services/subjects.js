//var subjectIndexURL =  "http://gojimo-challange.dev/data/subjects.json"
//var subjectShowURL  =  "http://gojimo-challange.dev/data/subjects.json/:id"

var subjectIndexURL =  "https://api.gojimo.net/api/v4/subjects"
var subjectShowURL  =  "https://api.gojimo.net/api/v4/subjects/:id"

services.factory('Subject', ['$resource', function($resource) {
  return $resource(subjectIndexURL, {}, {
    'query': {
      method: 'GET',
      isArray: true
    }
  });
}]);

services.factory('data/subjects.json', ['$resource', '$routeParams', function($resource, $routeParams) {
  return $resource(subjectShowURL, {params: $routeParams}, {
    'query': {
      method: 'GET',
      isArray: true
    }
  });
}]);