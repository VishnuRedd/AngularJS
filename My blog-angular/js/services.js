'use strict';

/* Services */

/*
 http://docs.angularjs.org/api/ngResource.$resource

 Default ngResources are defined as

 'get':    {method:'GET'},
 'save':   {method:'POST'},
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'}

 */

var services = angular.module('ngdemo.services', ['ngResource']);

services.factory('DummyFactory', function ($resource) {
    return $resource('/ngdemo/web/dummy', {}, {
        query: { method: 'GET', params: {}, isArray: false }
    })
});

services.factory('BlogPostsFactory', function ($resource) {
    return $resource('http://uiblog.herokuapp.com/Blog/api?uuid=34f29bd7-753a-4ff8-bb90-d1373cde1c5b', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('BlogPostFactory', function ($resource) {
    return $resource('http://uiblog.herokuapp.com/Blog/api/<id>?uuid=34f29bd7-753a-4ff8-bb90-d1373cde1c5b', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
