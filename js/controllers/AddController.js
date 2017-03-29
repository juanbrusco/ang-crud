app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	$scope.addProduct = function() {
		var ref = new Firebase(FBURL + "/data/pharmacies");
		var product = $firebaseArray(ref);
		product.$add({
			addres: 'as',
			email: 'a',
			location: 'a',
			name: "w",
			phone: 'a'
		});
		$location.path('/');
	};
	
}]);


