'use strict';

var appControllers = angular.module('myApp.controllers', []);

/* Controllers */
appControllers.controller('ContactListCtrl', ['$scope', function ContactListCtrl($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];

    $scope.orderProp = 'age';
}]);