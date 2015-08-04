angular.module('StockLookup', [])

.controller('LookupCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.stockQuotes = [];
	$scope.stockLookup = function () {
		$http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + $scope.search.toUpperCase() + "%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env")
		.success(function(data) {
			console.log('data : ', data)
			return $scope.stockQuotes.push(data.query.results.quote);
		})
		.error(function(err) {
			console.log('ERROR: ', err);
		})
		$scope.search = '';
		
	}

	// function removes quotes from page
	$scope.remove = function (index) {
		console.log("index : ", index)
		$scope.stockQuotes.splice(index, 1)
	};

	// change the entire row to red or green depending on day change
	// $scope.highlight= function () {
	// 	for (var i = 0; i < $scope.stockQuotes.length; i++) {
	// 		console.log('change: ',$scope.stockQuotes[i].Change)
	// 		if ($scope.stockQuotes[i].Change < 0) {
	// 			$('.rows').css('background-color: red')
	// 		} 
	// 	}
	// }


}])



