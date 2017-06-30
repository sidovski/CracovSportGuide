var sportguideApp = angular.module('sportguideApp', ['ngRoute']);

    // configure our routes
    sportguideApp.config(function($routeProvider) {
        $routeProvider

            .when('/#', {
                templateUrl : 'index.html',
                controller  : 'mainController'
            })


            .when('/search', {
                templateUrl : 'search.html',
                controller  : 'searchController'
            })

            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            });
    });

