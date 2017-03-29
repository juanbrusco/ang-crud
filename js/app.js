var app = angular.module('myApp', ['ngRoute', 'firebase']);

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
            templateUrl: 'views/pharmacy.html'

        })
        .otherwise({
            redirectTo: '/'
        });
});

app.constant("FBURL",
    // "https://ang-crud.firebaseio.com/products/" //Use the URL of your project here
    "https://farmaph-1d2b2.firebaseio.com"
);
