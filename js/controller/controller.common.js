'use strict';

app.filter('getById', function() {
  return function(input, id) {
    var i=0, len=input.length;
    for (; i<len; i++) {
      if (+input[i].id == +id) {
        return input[i];
      }
    }
    return null;
  }
});

app.filter('myFilter', function(){
  return function (input) {
    return input;
  }
});

app.filter('moment', function() {
    return function(dateString, format) {
        return moment(dateString).format(format);
    };
});

app.run(function ($rootScope) {
   console.log("desava se dok god se vrti aplikacija");
});