angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function() {
    console.log("An input changed!");
  };

  dataService.getTodos(function(response) {
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    // this deletes the todo
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo)
  }
})
// services are used to request data from a server and/or store user information
// http provider
.service('dataService', function($http) {
  this.getTodos = function(callback) {
    $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
  };

  this.saveTodo = function(todo) {
    console.log("The " + todo.name + " todo has been saved!")
  };
});
