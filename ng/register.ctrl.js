angular.module('APPNAME')
  .controller('RegisterCtrl', function ($scope, UsersSvc) {
    $scope.register = function (user) {
      UsersSvc.create(user).success(function () {
        alert('created user')
      })
    }
  })
