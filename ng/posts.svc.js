angular.module('APPNAME')
  .service('PostsSvc', function ($http) {
    var svc = this
    svc.fetch = function () {
      return $http.get('/api/posts')
    }
    svc.fetchByUsername = function (username) {
      return $http.get('/api/users/' + username + '/posts')
    }
    svc.create = function (post) {
      return $http.post('/api/posts', {
        post: post
      })
    }
  })
