'use strict';

var datepickerApp = angular.module('datepickerApp');

datepickerApp.controller('DatepickerController', ['$scope', function($scope){
  $scope.years = angular.utils.getYearsList();
  $scope.months = angular.utils.getMonthsList();
  $scope.days = [];

  var now = new Date();
  $scope.today = {
    day: now.getDay(),
    month: now.getMonth(),
    year: now.getYear()
  };
  $scope.selected = new Date();

}]);