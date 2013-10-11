'use strict';

var appServices = angular.module('myApp.services', ['ngResource']);

/* Services */
appServices.factory('Contact', ['$resource', function($resource){
    return $resource('contacts/:contactId.json', {}, {
        query: {method:'GET', params:{contactId:'contacts'}, isArray:true}
    });
}]);
