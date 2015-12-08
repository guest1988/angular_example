'use strict';

app.controller('Test2Controller', ['$scope','$rootScope','$controller', 
	function($scope, $rootScope, $controller) {

        console.log("hello from test2 controller");

        $rootScope.fullName = 'JohnDoe';
   
    }]);