angular.module('APPNAME')
.controller('LoginCtrl', function ($rootScope, $scope, $location, AuthSvc) {
  $scope.login = function (username, password) {
    AuthSvc.login(username, password).success(function () {
      $location.path('/users/' + username)
    }).error(function () {
      $scope.invalidLogin = true
    })
  }
})
