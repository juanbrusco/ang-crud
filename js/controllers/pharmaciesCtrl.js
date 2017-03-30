app.controller('pharmaciesCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Farmacias";

        $scope.editing = false;

        var pharmacies = new Firebase(FBURL + "/data/pharmacies");
        $scope.pharmacies = $firebaseArray(pharmacies);

        $scope.removePharmacy = function (id) {
            //console.log(id.toString());
            var ref = new Firebase(FBURL + "/data/pharmacies/" + id);
            var pharmacy = $firebaseObject(ref)
            pharmacy.$remove();
        };


    }]);

app.controller('pharmacyCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Agregar Farmacia";

        $scope.editing = false;

        $scope.addPharmacy = function () {
            var refAdd = new Firebase(FBURL + "/data/pharmacies");
            var pharmacy = $firebaseArray(refAdd);
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

app.controller('pharmacyEditCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Editar Farmacia";

        $scope.editing = true;
        
        var refEdit = new Firebase(FBURL + "/data/pharmacies/" + $routeParams.id);
        $scope.pharmacy = $firebaseObject(refEdit);


        $scope.editPharmacy = function() {
            $scope.pharmacy.$save({
                name: $scope.pharmacy.name
            });
            $scope.pharmacy = {};
            $location.path('pharmacies');

        };
    }]);

