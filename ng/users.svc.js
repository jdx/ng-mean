angular.module('APPNAME')
  .service('UsersSvc', function ($http) {
    this.create = function (user) {
      return $http.post('/api/users', user)
    }
    this.fetch = function () {
      return $http.get('/api/users')
    }
  })
