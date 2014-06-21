angular.module('APPNAME')
  .service('UsersSvc', function ($http) {
    this.create = function (user) {
      return $http.post('/api/users', user)
    }
    this.fetch = function () {
      return $http.get('/api/users')
    }
    this.findByUsername = function (username) {
      return $http.get('/api/users/' + username)
    }
  })
