app.controller('pharmaciesCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Farmacias";

        var pharmacies = new Firebase(FBURL + "/data/pharmacies");
        $scope.pharmacies = $firebaseArray(pharmacies);

        $scope.removePharmacy = function (id) {
            //console.log(id.toString());
            var ref = new Firebase(FBURL + "/data/pharmacies/" + id);
            var pharmacy = $firebaseObject(ref)
            pharmacy.$remove();
        };

        $scope.addPharmacy = function () {
            var ref = new Firebase(FBURL + "/data/pharmacies");
            var pharmacy = $firebaseArray(ref);
            pharmacy.$add({
                addres: $scope.pharmacy.address,
                email: $scope.pharmacy.email,
                location: 'location',
                name: $scope.pharmacy.name,
                phone: $scope.pharmacy.phone,
            });
            $location.path('pharmacies');
        };
    }]);

 