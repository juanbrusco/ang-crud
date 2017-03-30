app.controller('ordersCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams','NgTableParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams, NgTableParams) {

        $rootScope.mainTitle = "Pedidos";

        $scope.editing = false;

        var orders = new Firebase(FBURL + "/data/orders");
        var ordersArr = $firebaseArray(orders);

        $scope.orders = $firebaseArray(orders);

        $scope.removeOrder = function (id) {
            //console.log(id.toString());
            var ref = new Firebase(FBURL + "/data/orders/" + id);
            var order = $firebaseObject(ref)
            order.$remove();
        };

        //tabla
        $scope.ordersTable = new NgTableParams({
            page: 1, // show first page
            count: 10, // count per page
            total: ordersArr.total
        }, {
            filterDelay: 300,
            getData: function(params) {
                ordersArr.$loaded()
                    .then(function(x) {
                    })
                    .catch(function(error) {
                    });
                return ordersArr;
            }
        });


    }]);

app.controller('orderCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Agregar Pedido";

        $scope.editing = false;

        $scope.addOrder = function () {
            var refAdd = new Firebase(FBURL + "/data/orders");
            var order = $firebaseArray(refAdd);
            order.$add({
                pharmacyKey: $scope.order.pharmacyKey,
                userKey: $scope.order.userKey,
                state: $scope.order.state,
                date: $scope.order.date,
                images: $scope.order.images,
                comments: $scope.order.images
            });
            $location.path('orders');
        };
    }]);

app.controller('orderEditCtrl', ['$scope','$rootScope', '$firebaseArray', '$location', '$firebaseObject', 'FBURL', '$routeParams',
    function ($scope, $rootScope, $firebaseArray, $location, $firebaseObject, FBURL, $routeParams) {

        $rootScope.mainTitle = "Editar Pedido";

        $scope.editing = true;
        
        var refEdit = new Firebase(FBURL + "/data/orders/" + $routeParams.id);
        $scope.order = $firebaseObject(refEdit);


        $scope.editOrder = function() {
            $scope.order.$save({
                pharmacyKey: $scope.order.pharmacyKey,
                userKey: $scope.order.userKey,
                state: $scope.order.state,
                date: $scope.order.date,
                images: $scope.order.images,
                comments: $scope.order.images
            });
            $scope.order = {};
            $location.path('order');

        };
    }]);

