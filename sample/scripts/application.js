;'use strict';

var datepickerApp = angular.module('datepickerApp.appConfig',[]);

datepickerApp.constant('appConfig', new function(){
  this.APP = {};
});;'use strict';

var datepickerApp = angular.module('datepickerApp', ['datepickerApp.appConfig']);;'use strict';

var datepickerApp = angular.module('datepickerApp');

datepickerApp.directive('datepicker', function()
{
    return {
        restrict: 'A',
        link: function(scope, element, attrs)
        {
            element.bind('focus', function(){
              console.log("Event Attached");
            });
        }
    }
});