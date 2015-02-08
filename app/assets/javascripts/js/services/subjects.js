//var indexURL =  "http://gojimo-challange.dev/data/subjects.json"
//var showURL  =  "http://gojimo-challange.dev/data/subjects.json/:id"

var indexURL =  "https://api.gojimo.net/api/v4/subjects"
var showURL  =  "https://api.gojimo.net/api/v4/subjects/:id"

services.factory('Subject', ['$resource', function($resource) {
  return $resource(indexURL, {}, {
    'query': {
      method: 'GET',
      isArray: true
    }
  });
}]);

services.factory('data/subjects.json', ['$resource', '$routeParams', function($resource, $routeParams) {
  return $resource(showURL, {params: $routeParams}, {
    'query': {
      method: 'GET',
      isArray: true
    }
  });
}]);