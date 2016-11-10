angular.module('galPhoto')
  .controller('GalleryCtrl', ['$scope', 'instagram', 'Lightbox', function($scope, instagram, Lightbox) {

    $scope.images = [];
    var = imgArray = [];

    instagram.fetchPopular(function(data) {
      console.log(data);
      $scope.images = data;

      angular.forEach(data, function(value, key) {
        imgArray.push(value.images.standard_resoloution);
      })

      $scope.openLightboxModal = function (index) {
        Lightbox.openModal(imgArray, index);
      }
    });
  }])
