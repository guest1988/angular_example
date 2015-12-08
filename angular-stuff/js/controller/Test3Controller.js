'use strict';

app.controller('Test3Controller', ['$scope','$rootScope','$controller','$state', 
	function($scope, $rootScope, $controller, $state) {

        console.log("test3 controller");

        $scope.state = $state.current;

        console.log($rootScope.fullName);
   
}]);