angular.module('StockLookup', [])

.controller('LookupCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.stockQuotes = {};
	$scope.stockLookup = function () {
		$scope.stockQuotes = {};
		$http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + $scope.search.toUpperCase() + "%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env")
		.success(function(data) {
			console.log('data : ', data.query.results)
			return $scope.stockQuotes = data.query.results
		})
		.error(function(err) {
			console.log('ERROR: ', err);
		})
	}
	console.log($scope.stockQuotes)
}])

