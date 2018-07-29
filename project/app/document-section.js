"use strict";

var app = require('./app');
//document-section
app.directive("documentSection", function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      title: '@'
    },
    templateUrl: './app/templates/document-section.html'
  };
});

module.exports = app;
