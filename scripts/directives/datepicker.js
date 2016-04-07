'use strict';

var datepickerApp = angular.module('datepickerApp');

datepickerApp.directive('datepicker', function()
{
    return {
        restrict: 'A',
        link: function(scope, element, attrs)
        {
            element.bind('focus', function(){
              console.log("Event Triggered");
            });
        }
    }
});