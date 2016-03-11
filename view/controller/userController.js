/**
 * Created by seb on 12/02/2016.
 */
angular.module("userModule",[])
       .controller("userController", ["$scope", "$http", function($scope, $http){
         $scope.users = {};
		 $http.get("http://localhost:3000/users.json")
		       .then(function(res){
			   
			      $scope.users = res.data;
				   console.log('angular model', $scope.users);
			   });
   
    
  }]);
