app.service('DataService',['CONFIG','$http', '$q','$window', function (CONFIG, $http, $q, $window) {
    
    var dataFactory = {};

    //var urlBase = 'https://api.github.com/users/peterbe';

    dataFactory.proba = function(){
       return $http.get(CONFIG.API_URL);
    }

    dataFactory.test = function(){
    	var data = [
    	  {'id':0, 'name':'bmw','model':'330i','ps':300},
    	  {'id':1, 'name':'mercedes','model':'C320','ps':200},
    	  {'id':2, 'name':'audi','model':'A4 2.5T','ps':250},
    	  {'id':3, 'name':'volkswagen','model':'Passat 3.0','ps':230}	
    	];
    	return data;
    }

    return dataFactory;

    }]);