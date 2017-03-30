var app = angular.module('myApp', ['ngRoute', 'firebase','ngTable']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'pharmaciesCtrl',
            templateUrl: 'views/dashboard.html'
        })
        .when('/pharmacies', {
            controller: 'pharmaciesCtrl',
            templateUrl: 'views/pharmacies.html'
        })
        .when('/pharmacy', {
            controller: 'pharmacyCtrl',
            templateUrl: 'views/pharmacy.html'
        })
        .when('/pharmacy/:id', {
            controller: 'pharmacyEditCtrl',
            templateUrl: 'views/pharmacyEdit.html'

        })
        .when('/catalog', {
            controller: 'catalogCtrl',
            templateUrl: 'views/catalog.html'
        })
        .when('/item', {
            controller: 'itemCatalogCtrl',
            templateUrl: 'views/itemCatalog.html'
        })
        .when('/item/:id', {
            controller: 'itemCatalogEditCtrl',
            templateUrl: 'views/itemCatalogEdit.html'

        })
        .when('/orders', {
            controller: 'ordersCtrl',
            templateUrl: 'views/orders.html'
        })
        .when('/order', {
            controller: 'orderCtrl',
            templateUrl: 'views/order.html'
        })
        .when('/order/:id', {
            controller: 'orderEditCtrl',
            templateUrl: 'views/orderEdit.html'

        })
        .otherwise({
            redirectTo: '/'
        });
});

app.constant("FBURL",
    // "https://ang-crud.firebaseio.com/products/" //Use the URL of your project here
    "https://farmaph-1d2b2.firebaseio.com"
);
