var app = angular.module("sportguideApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/search", {
        templateUrl : "search.html"
    })
    .when("/events", {
        templateUrl : "events.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    });
});
