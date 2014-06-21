angular.module('APPNAME')
  .controller('RegisterCtrl', function ($scope, $location, UsersSvc, AuthSvc) {
    $scope.register = function (user) {
      UsersSvc.create(user).success(function () {
        AuthSvc.login(user.username, user.password).success(function () {
          $location.path('/users/' + user.username)
        })
      })
    }
  })
