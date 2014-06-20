angular.module('APPNAME')
.controller('NavCtrl', function ($rootScope, $window, AuthSvc) {
  AuthSvc.getCurrentUser().then(function (user) {
    $rootScope.user = user
  })
})
