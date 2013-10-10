'use strict';

var appControllers = angular.module('myApp.controllers', []);

/* Controllers */
appControllers.controller('ContactListCtrl', ['$scope', '$http', function ContactListCtrl($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
}]);