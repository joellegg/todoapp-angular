angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };

  $scope.hellowWorld = dataService.helloWorld;

  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  })
})
// services are used to request data from a server and/or store user information
// http provider
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('This is the hello console service!');
  };

  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)
  }
});
