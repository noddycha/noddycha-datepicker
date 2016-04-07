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
  $scope.hover_selected_class = "hover-selected";

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

  $scope.hover_selected = {
    day: current.day,
    month: current.month,
    year: current.year
  };

  $scope.selectDate = function(day) {
    $scope.selected.day = day;

    $scope.updateDate();
  };

  $scope.updateDate = function(){
    $scope.datepicker = $scope.selected.day+"/"+$scope.selected.month+"/"+$scope.selected.year;
  };

  $scope.hoverSelect = function(day){
    $scope.hover_selected.day = day;
  };

  $scope.hoverPrev = function() {
    if($scope.hover_selected.day > 1) {
      $scope.hover_selected.day = $scope.hover_selected.day - 1;
    }
  }

  $scope.hoverNext = function() {
    if($scope.hover_selected.day < angular.utils.getDays($scope.selected.month, $scope.selected.year).length) {
      $scope.hover_selected.day = $scope.hover_selected.day + 1;
    }
  }

  $scope.selectHovered = function() {
    $scope.selected.day = $scope.hover_selected.day;

    $scope.updateDate();
  }

  $scope.updateDate();

}]);