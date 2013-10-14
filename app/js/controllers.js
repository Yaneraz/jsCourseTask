'use strict';

var appControllers = angular.module('myApp.controllers', []);

/* Controllers */
appControllers.controller('ContactListCtrl', ['$scope', 'Contact', function($scope, Contact) {
    $scope.contacts = Contact.query();

    $scope.group = '';
    $scope.filterByGroup = function(contact){
        if (contact == undefined){
            $scope.group = '';
        } else {
            $scope.group = contact.group;
        }
    };
}]);

appControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'Contact', function($scope, $routeParams, Contact) {
    $scope.contact = Contact.get({contactId: $routeParams.contactId}, function(contact) {

    });

}]);

appControllers.controller('ContactEditCtrl', ['$scope', '$routeParams', 'Contact', '$location', function($scope, $routeParams, Contact, $location) {
    $scope.contact = Contact.get({contactId: $routeParams.contactId}, function(contact) {

    });

    $scope.resetAvatar = function(){
        $scope.contact.mainImageUrl = 'img/blank-avatar.png';
    };

    $scope.removeContact = function(contact) {
        if (confirm('You want to delete contact "' + contact.name + '". Are you sure?')){
            // db.deleteContact(contact.id)
            alert('Contact was successfully deleted');
            $location.path('/Contacts').replace();
        } else {
            alert('Contact wasn\'t deleted')
        }
    };

    $scope.update = function(contact) {
        alert('Contact saved, see details in console');
        $scope.contact = angular.copy(contact);
        // db.updateContact(contact)
        console.log($scope.contact);
    };

    $scope.cancel = function() {
        $location.path('/Contacts/'+ $scope.contact.id).replace();
    };
}]);