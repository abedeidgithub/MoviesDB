(function(){
	
	angular.module("project").controller("movieTailerCtr",['$scope','$http',movieTailerCtr]);
	//
	
	function movieTailerCtr($scope,$http){

        paramsObject = {};
        window.location.search.replace(/\?/,'').split('&').map(function(o){ paramsObject[o.split('=')[0]]= o.split('=')[1]});
        console.log(paramsObject.id);
 			var promise=$http.get('http://api.themoviedb.org/3/movie/'+paramsObject.id+'/videos?api_key=78bf6a2ef253cfbbb8e3067ab8956a4b');
							 
		        promise.then(
				
				function(response){
					$scope.res= response.data.results;

				
				},
				
				function(error){
					onsole.log(error);
				}
				
				
				
				);



		
		
	}
	
	
	
}
)();