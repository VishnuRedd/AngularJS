'use strict';

/* Controllers */

var app = angular.module('ngdemo.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('DummyCtrl', ['$scope', 'DummyFactory', function ($scope, DummyFactory) {
    $scope.bla = 'bla from controller';
    DummyFactory.get({}, function (dummyFactory) {
        $scope.firstname = dummyFactory.firstName;
    })
}]);

app.controller('BlogPostListCtrl', ['$scope', 'BlogPostsFactory', 'BlogPostFactory', '$location',
    function ($scope, BlogPostsFactory, BlogPostFactory, $location) {

        // callback for ng-click 'editUser':
        $scope.editBlogPost = function (blogpostId) {
            $location.path('/blogpost-edit/' + blogpostId);
        };

        // callback for ng-click 'deleteUser':
        $scope.deleteBlogPost = function (blogpostId) {
        	BlogPostFactory.delete({ id: blogpostId });
            $scope.blogposts = BlogPostsFactory.query();
        };

        // callback for ng-click 'createUser':
        $scope.createNewBlogPost = function () {
            $location.path('/blogpost-creation');
        };

        $scope.blogposts = BlogPostsFactory.query();
    }]);

app.controller('BlogPostEditCtrl', ['$scope', '$routeParams', 'BlogPostFactory', '$location',
    function ($scope, $routeParams, BlogPostFactory, $location) {

        // callback for ng-click 'updateUser':
        $scope.updateBlogPost = function () {
        	BlogPostFactory.update($scope.blogpost);
            $location.path('/blogpost-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/blogpost-list');
        };

        $scope.blogpost = BlogPostFactory.show({id: $routeParams.id});
    }]);

app.controller('BlogPostCreationCtrl', ['$scope', 'BlogPostsFactory', '$location',
    function ($scope, BlogPostsFactory, $location) {

        // callback for ng-click 'createNewUser':
        $scope.createNewBlogPost = function () {
        	BlogPostsFactory.create($scope.blogpost);
            $location.path('/blogpost-list');
        }
    }]);
