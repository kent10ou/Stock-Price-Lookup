angular.module('StockLookup', [
	//'StockLookup.services'
	])

.controller('LookupCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.lookup = function () {
  	var obj = {};
  	var getQuotes = function () {
  		console.log('WTF')
    	$http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env")
    		.success(function(data) {
    			console.log('data : ', data)
      		return obj = data
    		})
    		.error(function(err) {
    			console.log('ERROR: ', err);
    		})
  	}

	getQuotes();
    // console.log(GetQuotesFac.getQuotes())
    //   .then(function () {
    //   console.log('hello')
    // }) 
    // .catch(function (error) {
    //   console.log(error);
    // })
  }
}])

