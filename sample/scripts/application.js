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

  return {
    log: log,
    getYearsList: getYearsList,
    getMonthsList: getMonthsList
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
              var date_dropdown = angular.element('<div class="dp-container" onclick="event.stopPropagation()" style="left:'+input_dim.left+'; top:'+(input_dim.top+20)+'"> <div class="dp-header"> <div class="dp-year"> <select> <option ng-repeat="year in years" ng-value="year"> {{ year }} </option> </select> </div> <div class="dp-month"> <select> <option ng-repeat="month in months" ng-value="$index+1"> {{ month }} </option> </select> </div> </div> <div class="dp-body"> </div> </div>');

              angular.element(document.body).append($compile(date_dropdown)(scope));
              scope.$apply();
            });

            angular.element(document.body).bind('click', function(event) {
              angular.element(document.querySelector('.dp-container')).remove();
            });
        }
    }
});;'use strict';

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