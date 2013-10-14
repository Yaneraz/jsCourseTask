'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        //.when('/Contacts', {controller: 'ContactListCtrl'})
        .when('/Contacts/:contactId', {templateUrl: 'partials/details.html', controller: 'ContactDetailCtrl'})
        .when('/ContactsEdit/:contactId', {templateUrl: 'partials/detailsEdit.html', controller: 'ContactEditCtrl'})

        .otherwise({redirectTo: '/Contacts'});
}]);
