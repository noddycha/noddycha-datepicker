'use strict';

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
              var date_dropdown = angular.element('<div class="dp-container" ng-controller="DatepickerController" onclick="event.stopPropagation()" style="left:'+input_dim.left+'; top:'+(input_dim.top+20)+'"> <div class="dp-header"> <div class="dp-year"> <select ng-model="selected.year"> <option ng-repeat="year in years" ng-value="year" ng-selected="year == selected.year"> {{ year }} </option> </select> </div> <div class="dp-month"> <select ng-model="selected.month"> <option ng-repeat="month in months" ng-value="$index+1" ng-selected="$index+1 == selected.month"> {{ month }} </option> </select> </div> </div> <div class="dp-body"> <div class="dp-days"> <div class="dp-day" ng-class="day == selected.day ? selected_class : 0" ng-repeat="day in days" ng-click="selectDate(day)"> {{day}} </div> </div> </div> </div>');

              angular.element(document.body).append($compile(date_dropdown)(scope));
              scope.$apply();
            });

            angular.element(document.body).bind('click', function(event) {
              angular.element(document.querySelector('.dp-container')).remove();
            });
        }
    }
});