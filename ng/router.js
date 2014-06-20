angular.module('APPNAME')
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
    .when('/', { templateUrl: 'posts.html', controller: 'PostsCtrl' })
  })
