/**
 * Created by seb on 12/02/2016.
 */
angular.module("heinModule")
   .controller("userController", function($scope, $http){
        $scope.users = [];
    
        $http.get("http://hein.world:3000/users.json").then(function(result) {
            $scope.users = result.data;
        }, function() {
            $scope.users = [{"id":1,"username":"Imoroldin","skpUsername":"Imoroldin","picture":"user.png","description":"Je suis mo     i","url":"http://localhost:3000/users/1.json"},{"id":2,"username":"Imoroldin","skpUsername":"Escilon","picture":"user.png","description":" Je suis Escilon","url":"http://localhost:3000/users/2.json"},{"id":3,"username":"Churlhard","skpUsername":"Churlhard","picture":"user.png","description":" Je suis Churlhard","url":"http://localhost:3000/users/3.json"},{"id":4,"username":"Slegazy","skpUsername":"Slegazy","picture":"user.png","description":" Je suis Slegazy","url":"http://localhost:3000/users/4.json"},{"id":5,"username":"Shaldaorgor","skpUsername":"Shaldaorgor","picture":"user.png","description":" Je suis Shaldaorgor","url":"http://localhost:3000/users/5.json"},{"id":6,"username":"Clarissa","skpUsername":"Clarissa","picture":"user.png","description":" Je suis Clarissa","url":"http://localhost:3000/users/6.json"},{"id":7,"username":"Viarra","skpUsername":"Viarra","picture":"user.png","description":" Je suis Viarra","url":"http://localhost:3000/users/7.json"},{"id":8,"username":"Tearra","skpUsername":"Tearra","picture":"user.png","description":" Je suis Teara","url":"http://localhost:3000/users/8.json"},{"id":9,"username":"Waze","skpUsername":"waze","picture":"user.png","description":"je suis waze","url":"http://localhost:3000/users/9.json"},{"id":10,"username":"Sonic","skpUsername":"sonic","picture":"user.png","description":"je suis sonic","url":"http://localhost:3000/users/10.json"}];
        });
  });
