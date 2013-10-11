'use strict';

var appControllers = angular.module('myApp.controllers', []);

/* Controllers */
appControllers.controller('ContactListCtrl', ['$scope', 'Contact', function($scope, Contact) {
    $scope.contacts = Contact.query();

    $scope.group = '';
    $scope.filterByGroup = function(contact){
        $scope.group = contact.group;
    };
}]);

appControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'Contact', function($scope, $routeParams, Contact) {
    $scope.contact = Contact.get({contactId: $routeParams.contactId}, function(contact) {
        $scope.mainImageUrl = contact.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);