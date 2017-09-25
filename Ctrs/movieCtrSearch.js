(function(){
	
	angular.module("project").controller("movieCtrSearch",['$scope','$http',movieCtrSearch]);
	
	function movieCtrSearch($scope,$http){
        paramsObject = {};
        window.location.search.replace(/\?/,'').split('&').map(function(o){ paramsObject[o.split('=')[0]]= o.split('=')[1]});
 			var promise=$http.get('https://api.themoviedb.org/3/search/movie?api_key=78bf6a2ef253cfbbb8e3067ab8956a4b&query='+paramsObject.search);
        console.log(promise);

        $scope.show = "false";
		        promise.then(

				function(response){
                    $scope.res= response.data.results;
console.log($scope.res[0].title);
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