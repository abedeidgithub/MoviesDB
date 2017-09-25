(function(){
	
	angular.module("project").controller("movieCtr",['$scope','$http',movieCtr]);
	
	function movieCtr($scope,$http){
 			var promise=$http.get('http://api.themoviedb.org/3/movie/popular?api_key=78bf6a2ef253cfbbb8e3067ab8956a4b');
        $scope.show = "false";
		        promise.then(

				function(response){
                    $scope.res= response.data.results;

				},

				function(error){
					onsole.log(error);
				}



				);
        $scope.myFunc = function($id) {

            window.location = 'movieDetails.html?id='+$id;

        };



		
	}

	
	
}
)();