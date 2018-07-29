"use strict";

var app = require('./app');

var restController = function($scope, $http, $timeout, userApiService, promiseService) {

  $scope.data;
  $scope.process = 'processing...';

  // Don't do http calls from the controller.
  // Add the http calls to a service/factory
  // and leave the Controller as lean as possible
  $http({
    method: 'GET',
    url: '/api/users'
  }).then(function(response) {
    $timeout(function() {
      $scope.data = response.data;
      $scope.process = 'processed';
    }, 2000);
  });

  $scope.dataFromService = userApiService.getUsers();
  $scope.singleUser = userApiService.getUserById(56123);
  $scope.process = 'almost there';

  $scope.asynCallExecutedSuccess = false;
  promiseService.asyncCall(true).then(
    function(data){
      $scope.asynCallExecutedSuccess = data;
    }, function(error){
      $scope.asynCallExecutedSuccess = error;
    });

  promiseService.asyncCall(false).then(
    function(data){
      $scope.asynCallExecutedError = data;
    }, function(error){
      $scope.asynCallExecutedError = error;
    });
};

app.controller("restController", ['$scope', '$http', '$timeout', 'userApiService', 'promiseService', restController]);
module.exports = app
