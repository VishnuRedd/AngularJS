'use strict';

// Declare app level module which depends on filters, and services
angular.module('ngdemo', ['ngdemo.filters', 'ngdemo.services', 'ngdemo.directives', 'ngdemo.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dummy', {templateUrl: 'partials/dummy.html', controller: 'DummyCtrl'});
        $routeProvider.when('/blogpost-list', {templateUrl: 'partials/blogpost-list.html', controller: 'BlogPostListCtrl'});
        $routeProvider.when('/blogpost-edit/:id', {templateUrl: 'partials/blogpost-edit.html', controller: 'BlogPostEditCtrl'});
        $routeProvider.when('/blogpost-creation', {templateUrl: 'partials/blogpost-creation.html', controller: 'BlogPostCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/dummy'});
    }]);
