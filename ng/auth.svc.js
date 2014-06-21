angular.module('APPNAME')
.service('AuthSvc', function ($http, $window, $q) {
  var svc = this
  var deferredUser = $q.defer()

  function token (val) {
    if (val) {
      $window.localStorage.token = val
    } else {
      return $window.localStorage.token
    }
  }

  svc.login = function (username, password) {
    var req = $http.post('/api/auth', {username: username, password: password})
    req.success(function (response) {
      token(response.token)
      svc.getCurrentUser()
    })
    return req
  }

  svc.getCurrentUser = function () {
    if (token()) {
      $http.defaults.headers.common.Authorization = 'Basic ' + token()
      $http.get('/api/user').success(deferredUser.resolve)
    }
    return deferredUser.promise
  }

  svc.logout = function () {
    delete $window.localStorage.token
    $window.location.href = '/'
  }
})
