'use strict';

var appControllers = angular.module('myApp.controllers', []);

/* Controllers */
appControllers.controller('ContactListCtrl', ['$scope', function ContactListCtrl($scope) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}]);