angular.module('APPNAME')
  .controller('PostsCtrl', function ($scope, PostsSvc) {
    function reload () {
      PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts
      })
    }
    reload()

    $scope.create = function (post) {
      PostsSvc.create(post).success(function () {
        $scope.newPost = {}
        reload()
      })
    }
  })
