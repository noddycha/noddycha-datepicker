angular.utils = function() {

  function log(message) {
    console.log(message);
  }

  function getYearsList() {
    var years = [];
    var start_year = 1970;
    for(var i=0; i<50; i++) {
      years.push((start_year+i));
    }
    return years;
  }

  function getMonthsList() {
    var months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months;
  }

  function getCurrentYear() {
    return new Date();
  }

  function getDays(month, year) {
    var days = [];
    if(month == 2) {
      if(year % 4 == 0) {
        for(var i=0; i<29; i++) { days.push(i+1); }
      } else {
        for(var i=0; i<28; i++) { days.push(i+1); }
      }
    } else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      for(var i=0; i<31; i++) { days.push(i+1); }
    } else {
      for(var i=0; i<30; i++) { days.push(i+1); }
    }

    return days;
  }

  return {
    log: log,
    getYearsList: getYearsList,
    getMonthsList: getMonthsList,
    getDays: getDays
  };
}();;'use strict';

var datepickerApp = angular.module('datepickerApp.appConfig',[]);

datepickerApp.constant('appConfig', new function(){
  this.APP = {};
});;'use strict';

var datepickerApp = angular.module('datepickerApp', ['datepickerApp.appConfig']);;'use strict';

var datepickerApp = angular.module('datepickerApp');

datepickerApp.directive('datepicker', function($compile)
{
    return {
        restrict: 'A',
        link: function(scope, element, attrs)
        {
            element.bind('focus', function(event) {
              if(document.querySelector('.dp-container')) {
                return;
              }
              var $input = element[0];
              $input.onclick = function(evt) {
                evt.stopPropagation();
              };

              var input_dim = $input.getBoundingClientRect();
              var date_dropdown = angular.element('<div class="dp-container" onclick="event.stopPropagation()" style="left:'+input_dim.left+'; top:'+(input_dim.top+20)+'"> <div class="dp-header"> <div class="dp-year"> <select ng-model="selected.year" ng-change="updateDays()"> <option ng-repeat="year in years" ng-value="year" ng-selected="year == selected.year"> {{ year }} </option> </select> </div> <div class="dp-month"> <select ng-model="selected.month" ng-change="updateDays()"> <option ng-repeat="month in months" ng-value="$index+1" ng-selected="$index+1 == selected.month"> {{ month }} </option> </select> </div> </div> <div class="dp-body"> <div class="dp-days"> <div class="dp-day" ng-class="[(day == selected.day) ? selected_class : 0, (day == hover_selected.day) ? hover_selected_class : 0]" ng-repeat="day in days" ng-mouseover="hoverSelect(day)" ng-click="selectDate(day)"> {{day}} </div> </div> </div> </div>');

              angular.element(document.body).append($compile(date_dropdown)(scope));
              scope.$apply();

              angular.element(document.body).bind('keydown keypress', function(event) {
                  var keyCode = event.which || event.keyCode;

                  // If left is pressed
                  if(keyCode === 37) {
                    angular.element(document.getElementsByClassName('hover-selected')).scope().hoverPrev();
                    scope.$apply();
                    event.preventDefault();
                  } else if (keyCode === 39) {
                    angular.element(document.getElementsByClassName('hover-selected')).scope().hoverNext();
                    scope.$apply();
                    event.preventDefault();
                  } else if (keyCode === 13) {
                    angular.element(document.getElementsByClassName('hover-selected')).scope().selectHovered();
                    scope.$apply();
                    event.preventDefault();
                  }
              });
            });

            angular.element(document.body).bind('click', function(event) {
              angular.element(document.querySelector('.dp-container')).remove();
              angular.element(document.body).unbind('keydown keypress');
            });
        }
    }
});;'use strict';

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

  $scope.updateDays = function() {
    $scope.days = angular.utils.getDays($scope.selected.month, $scope.selected.year);
  }

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