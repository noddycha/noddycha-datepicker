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
        for(var i=0; i<28; i++) { days.push(i+1); }
      } else {
        for(var i=0; i<27; i++) { days.push(i+1); }
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
}();