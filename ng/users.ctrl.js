angular.module('APPNAME')
  .controller('UsersCtrl', function ($scope, UsersSvc) {
    UsersSvc.fetch().success(function (users) {
      $scope.users = users
    })
  })
