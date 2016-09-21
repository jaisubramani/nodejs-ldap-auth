var app = angular.module('nodejsldapauth', ['ui.router', 'ui.bootstrap', 'ngStorage', 'ngAnimate', 'angular-loading-bar']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .state('logout', {
            url: '/logout',
            controller: 'LogoutController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        });
});
