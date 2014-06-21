angular.module('APPNAME')
.controller('NavCtrl', function ($rootScope, $window, AuthSvc) {
  $rootScope.logout = AuthSvc.logout

  AuthSvc.getCurrentUser().then(function (user) {
    $rootScope.currentUser = user
  })
})
