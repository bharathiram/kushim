// public/core.js
var thingsToDo = angular.module('thingsToDo', []);
thingsToDo.controller('mainController',['$scope','$http', ($scope, $http) => {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/tasks')
        .success(function (data) {
            $scope.tasks = data.table;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTask = function () {
        $http.post('/api/tasks', $scope.formData)
            .success(function (data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.tasks = data.table;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteTask = function (id) {
        $http.delete('/api/tasks/' + id)
            .success(function (data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.tasks = data.table;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}]);