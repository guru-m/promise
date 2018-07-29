"use strict";

var app = require('./app');

var userApiService = function($http) {

  this.getCall = function(params) {
    return $http.get('/api/users', params);
  };

  this.getUsers = function() {
    var data = {
      users: undefined,
      error: undefined
    };
    var successCallback = function(response) {
      data.users = response.data.users;
    };
    var errorCallback = function(error) { data = error; };
    this.getCall().then(successCallback, errorCallback);

    return data;
  };

  this.getUserById = function(userId) {
    var data = { // $ab1
      user: undefined,
      error: undefined
    };

    var obj = {
      params:{
        id: userId
      }
    };

    var successCallback = function(response) {
      data.user = response.data;
    };
    var errorCallback = function(error) { data = error; };
    this.getCall(obj).then(successCallback, errorCallback);

    return data;

  };

};

app.service("userApiService", ['$http', userApiService]);

module.exports = app;
