var listHalls = angular.module('listHall')

listHalls.factory('halls', ['$http', function($http){ //create a factory "stores" that
// will hold the variable stores, as well as http functions
  var o = {
    halls: []
  };
//getting
  o.getAll = function() { //getting data for layer 1
    return $http.get('http://laundryscrape-dev.us-east-1.elasticbeanstalk.com/halls' , {caching:true}).success(function(data) { 
        angular.copy(data, o.stores); //binding data from get with o.stores
    });
  };
  return o;
}]);

listHalls.controller('listHallCtrl', [ //controller for showing stores
    //"layer 1"
    '$scope',
    'halls',

    
    function($scope, halls) {
        $scope.halls = halls.halls; //setting stores
        $scope.sortType = 'name';

        halls.getAll();

}]);