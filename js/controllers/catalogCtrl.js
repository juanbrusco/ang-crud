app.controller('catalogCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Catálogo";

        $scope.editing = false;

        var catalog = new Firebase(FBURL + "/data/catalog");
        $scope.catalog = $firebaseArray(catalog);

        $scope.removeItem = function (id) {
            //console.log(id.toString());
            var ref = new Firebase(FBURL + "/data/catalog/" + id);
            var item = $firebaseObject(ref)
            item.$remove();
        };


    }]);

app.controller('itemCatalogCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Agregar Item";

        $scope.editing = false;

        $scope.addItem = function () {
            var refAdd = new Firebase(FBURL + "/data/catalog");
            var item = $firebaseArray(refAdd);
            item.$add({
                description: $scope.item.description,
                image: $scope.item.image,
                price: $scope.item.price,
                stock: $scope.item.stock,
                type: $scope.item.type
            });
            $location.path('catalog');
        };
    }]);

app.controller('itemCatalogEditCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Editar Item";

        $scope.editing = true;
        
        var refEdit = new Firebase(FBURL + "/data/catalog/" + $routeParams.id);
        $scope.item = $firebaseObject(refEdit);


        $scope.editItem = function() {
            $scope.item.$save({
                description: $scope.item.description,
                image: $scope.item.image,
                price: $scope.item.price,
                stock: $scope.item.stock,
                type: $scope.item.type
            });
            $scope.item = {};
            $location.path('catalog');

        };
    }]);

