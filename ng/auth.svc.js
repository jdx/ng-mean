angular.module('APPNAME')
.service('AuthSvc', function ($http, $window, $q) {

  function token (token) {
    if (token) {
      $window.localStorage.token = token
    } else {
      return $window.localStorage.token
    }
  }

  this.login = function (username, password) {
    var req = $http.post('/api/auth', {username: username, password: password})
    req.success(function (response) {
      token(response.token)
    })
    return req
  }

  this.getCurrentUser = function () {
    var deferred = $q.defer()
    if (token()) {
      $http.defaults.headers.common.Authorization = 'Basic ' + token()
      $http.get('/api/user').success(deferred.resolve)
    }
    return deferred.promise
  }
})
