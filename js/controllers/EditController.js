app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    
    var ref = new Firebase(FBURL + "/data/pharmacies/" + $routeParams.id);
		$scope.product = $firebaseObject(ref);
    
    $scope.editProduct = function() {
        $scope.product.$save({
            name: $scope.product.name
        });
        $scope.edit_form.$setPristine();
        $scope.product = {};
        $location.path('/');
        
    };
     
}]);