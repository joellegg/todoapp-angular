'use strict';

// we leave the brackets (dependencies) out otherwise it will create a new module named todoListApp
// this would overwrite the module
angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function() {
    var todo = {name: "this is a new todo"};
    $scope.todos.unshift(todo);
  }

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
