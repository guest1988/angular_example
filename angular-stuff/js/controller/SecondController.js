'use strict';

app.controller('SecondController', ['$scope','$rootScope','$controller','$state','$stateParams','DataService','$filter', 
	function($scope, $rootScope, $controller, $state, $stateParams, DataService, $filter) {

        console.log("hello from second controller");

        // DataService.proba().success(function(response){
        //   $scope.myItem = response;
        //   console.log($scope.myItem);
        // });

        $scope.cars = DataService.test();

        $scope.showdetails = function(id){
            var found = $filter('getById')($scope.cars, id);
            return found;
        }
        
        $scope.kk = $scope.cars[$stateParams.id];
        
        var tmp = $filter('myFilter')('dinooo');
        console.log(tmp);
}]);