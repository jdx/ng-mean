angular.module('APPNAME')
.controller('LoginCtrl', function ($rootScope, $scope, $location, AuthSvc) {
  $scope.login = function (username, password) {
    AuthSvc.login(username, password).success(function (response) {
      $location.path('/')
    }).error(function () {
      $scope.invalidLogin = true
    })
  }
})
