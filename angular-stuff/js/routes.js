  'use strict';

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        
        .state('index', {
            url: "",
             views: {
              "": {
                  templateUrl: 'proba.html'
                  //controller: 'Test1Controller'
            }
          }
        })

        .state('route1', {
            url: "/route1",
            views: {
              "": {
                  templateUrl: 'test1.html',
                  controller: 'Test1Controller'
            }
          }
        })

        .state('route2', {
            url: "/route2",
            views: {
                "": {
                    templateUrl: "test2.html"
                }
            }
        })

        .state('route3',{
          url: "/route3",
          templateUrl: 'test3.html'                      
        })

        .state('middle', {
          url: "",
          abstract: true,
          templateUrl: 'views/tpl.middle.html',
          controller: 'Test2Controller'
        })

        .state('middle.alpha', {
            url: "/alpha",
            templateUrl: 'views/tpl.leaf.html',
            controller: function ($scope, $state){
              $scope.state = $state.current;
            },
        })

        .state('middle.beta', {
            url: "/beta",
            templateUrl: 'views/tpl.leaf.html',
            controller: function ($scope, $state){
              $scope.state = $state.current;
            },
        })

        .state('middle.gama', {
            url: "/gama",
            templateUrl: 'views/tpl.leaf.html',
            controller: function ($scope, $state){
              $scope.state = $state.current;
            },
        })

        .state('middle.omega', {
            url: "",
            abstract: true, 
            templateUrl: 'views/omega.html',
            controller: 'Test3Controller'
        })

        .state('middle.omega.first', {
            url: "/first", 
            templateUrl: 'views/first.html',
            //controller: 'Test3Controller'
        })

        .state('middle.omega.second', {
            url: "/second", 
            templateUrl: 'views/second.html',
            controller: 'SecondController'
        })

        .state('middle.omega.second_car_update', {
            url: "/second/update/:id", 
            templateUrl: 'views/edit.html',
            controller: 'SecondController'
        })


        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/route1");
    })