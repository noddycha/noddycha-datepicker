'use strict';

var datepickerApp = angular.module('datepickerApp');

datepickerApp.controller('DatepickerController', ['$scope', function($scope){

  var now = new Date();
  var current = {
    day: now.getDate(),
    month: (now.getMonth() + 1),
    year: now.getFullYear()
  };

  $scope.years = angular.utils.getYearsList();
  $scope.months = angular.utils.getMonthsList();
  $scope.days = angular.utils.getDays(current.month, current.year);

  $scope.selected_class = "selected";

  // $scope.today = {
  //   day: now.getDay(),
  //   month: now.getMonth(),
  //   year: now.getYear()
  // };

  $scope.selected = {
    day: current.day,
    month: current.month,
    year: current.year
  };

  $scope.selectDate = function(day) {
    $scope.selected.day = day;
  };

}]);