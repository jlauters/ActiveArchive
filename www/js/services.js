angular.module('mfactivearchive.services', ['mfactivearchive.config'])

.factory('Artists', function($http, dataConfig, $log) {
  // Might use a resource here that returns a JSON array

 	  
  return {
    load: function(s, l) {
    	if (s < 1) { s = 0; }
    	if (l < 1) { l = 20; }
    	
		var promise = $http({
		method : 'POST',
		url : dataConfig.backend + '/service.php/simple/artists?q=*&limit=' + l + '&start=' + s
		}).then(function(response) {
			$log.log('Load complete');
			return response.data['data'];
		}, function() { 
			$log.log("Error loading artists"); 
		});
		
		return promise;
    },
    
    get: function(id) {
		var promise = $http({
			method : 'POST',
			url : dataConfig.backend + '/service.php/simple/artist?id=' + id
		}).then(function(response) {
			$log.log('Load complete');
			return response.data;
		}, function() { 
			$log.log("Error loading artist"); 
		});
		
		return promise;
	}	
  };
})
.factory('Exhibitions', function($http, dataConfig, $log) {

  return {
    load: function(s, l) {
    	if (s < 1) { s = 0; }
    	if (l < 1) { l = 20; }
    	
		var promise = $http({
		method : 'POST',
		url : dataConfig.backend + '/service.php/simple/exhibitions?q=*&limit=' + l + '&start=' + s
		}).then(function(response) {
			$log.log('Load complete');
			return response.data['data'];
		}, function() { 
			$log.log("Error loading exhibitions"); 
		});
		
		return promise;
    },

    get: function(id) {
		var promise = $http({
			method : 'POST',
			url : dataConfig.backend + '/service.php/simple/exhibition?id=' + id
		}).then(function(response) {
			$log.log('Load complete');
			return response.data;
		}, function() { 
			$log.log("Error loading exhibition"); 
		});
		
		return promise;
	}
    	
  };
}).factory('Search', function($http, dataConfig, $log) {

    return {
        load: function(s, l) {
    	    if (s < 1) { s = 0; }
    	    if (l < 1) { l = 20; }
    	
            var term = 'Adams';

		    var promise = $http({
		    method : 'POST',
		    url : dataConfig.backend + '/service.php/simple/artists?q=' + term + '&limit=' + l + '&start=' + s
		    }).then(function(response) {
			    $log.log('Load complete');
			    return response.data['data'];
		    }, function() { 
			    $log.log("Error loading artists"); 
		    });
		
		    return promise;
        },

     
        get: function(term) {
            var promise = $http({
                method: 'POST',
                url: dataConfig.backend + '/service.php/simple/artists?q=' + term + '&limit=20&start=0'
            }).then(function(response) {
                $log.log('Load complete');
                return response.data;
            }, function() {
                $log.log("Error loading search");
            });

            return promise;
        }
    };
});
