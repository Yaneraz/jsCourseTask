'use strict';

/* App Module */
var phonecatApp = angular.module('phonecatApp', [ 'ngRoute', 'phonecatAnimations', 'phonecatControllers', 'phonecatFilters', 'phonecatServices' ]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/List', {
                templateUrl: 'partials/list.html',
                controller: 'ContactListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/List'
            });
    }]);
