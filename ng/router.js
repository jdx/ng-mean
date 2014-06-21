angular.module('APPNAME')
.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
  .when('/posts',    { templateUrl: 'posts.html', controller: 'PostsCtrl' })
  .when('/users',    { templateUrl: 'users.html', controller: 'UsersCtrl' })
  .when('/users/:id',{ templateUrl: 'profile.html', controller: 'ProfileCtrl' })
  .when('/register', { templateUrl: 'register.html', controller: 'RegisterCtrl' })
  .when('/login',    { templateUrl: 'login.html', controller: 'LoginCtrl' })
  .otherwise({redirectTo: '/posts'})
})
