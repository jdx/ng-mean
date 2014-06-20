angular.module('APPNAME')
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
    .when('/posts', { templateUrl: 'posts.html', controller: 'PostsCtrl' })
    .when('/users', { templateUrl: 'users.html', controller: 'UsersCtrl' })
    .when('/register', { templateUrl: 'register.html', controller: 'RegisterCtrl' })
    .otherwise({redirectTo: '/posts'})
  })
