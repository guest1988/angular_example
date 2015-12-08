'use strict';

app.controller('Test1Controller', ['DataService','$scope','$rootScope','$controller', 
    function(DataService, $scope, $rootScope, $controller) {
        //$scope.teo = "kako je teo";
        // var controller = this;
        // $scope.datak = [
        //   {'id':1, 'name':'opel'},
        //   {'id':2, 'name':'bmw'},
        //   {'id':3, 'name':'mercedes'},
        //   {'id':4, 'name':'audi'}
        //   ];

        // controller.init = function(){
        //   $scope.data = [
        //   {'id':1, 'name':'opel'},
        //   {'id':2, 'name':'bmw'},
        //   {'id':3, 'name':'mercedes'}
        //   ];
        //    //return $scope.data;
        // };

        // controller.init();
         $scope.dateISO = "2012-11-04T18:53:04.0000000Z";
         $scope.dateAspNet = "/Date(1352055184000)/";
         $scope.datum = '2/13/2015';
         //$scope.formattedDate = moment($scope.datum).format('YYYY-MM-DD');
         //console.log($scope.formattedDate);
         
         //console.log($scope.dateAspNet);
    

          DataService.proba().success(function(response){
            $scope.datas = response;
            console.log($scope.datas);
          });
   
    }]);