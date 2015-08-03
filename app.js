angular.module('StockLookup', [])

.controller('LookupCtrl', function ($scope) {
  $scope.link = {};
  $scope.addLink = function () {
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function () {
        $scope.loading = false;
        $location.path('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});


