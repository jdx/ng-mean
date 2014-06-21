angular.module('APPNAME')
.controller('ProfileCtrl', function ($scope, $routeParams, UsersSvc, PostsSvc) {
  UsersSvc.findByUsername($routeParams.id).success(function (user) {
    $scope.user = user
  })

  PostsSvc.fetchByUsername($routeParams.id).success(function (posts) {
    $scope.posts = posts
  })
})
