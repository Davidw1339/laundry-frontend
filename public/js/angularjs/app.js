var app = angular.module('app', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http)
{
  $scope.halls = [];
  $http.get("http://laundryscrape-dev.us-east-1.elasticbeanstalk.com/halls").then(function(response)
  {
    console.log("test");
    angular.copy(response.data, $scope.halls);
    console.log(response);
  });
}]);
