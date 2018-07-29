"use strict";

var app = require('./app');

var promiseService = function($q) {

  this.asyncCall = function(isSuccess) {
    var deferred = $q.defer();

      if (isSuccess || isSuccess === undefined) {
          deferred.resolve("It worked fine");
      } else {
          deferred.reject("Something went wrong on your call. Bad luck.");
      }

    return deferred.promise;
  };

};

app.service("promiseService", ['$q', promiseService]);
