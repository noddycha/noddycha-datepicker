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
}();