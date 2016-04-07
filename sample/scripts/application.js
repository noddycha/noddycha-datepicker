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
            element.bind('focus', function(event){
              if(document.querySelector('.dp-container')) {
                return;
              }
              var $input = element[0];
              $input.onclick = function(evt) {
                evt.stopPropagation();
              };
              var input_dim = element[0].getBoundingClientRect();
              angular.element(document.body).append('<div class="dp-container" onclick="event.stopPropagation()" style="left:'+input_dim.left+'; top:'+(input_dim.top+10)+'"> </div>');
            });

            angular.element(document.body).bind('click', function(event){
              angular.element(document.querySelector('.dp-container')).remove();
            });
        }
    }
});