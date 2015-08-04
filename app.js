angular.module('StockLookup', [])

.factory('GetQuotesFactory', function ($http) {
  var obj = {content:null};
  var getQuotes = function () {
    $http.get(
      "./yql.json")
      //"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)%0A%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env")
    .success(function(data) {
       return obj.content = data
    })
  }
})

.controller('LookupCtrl', function ($scope, GetQuotesFactory) {
  $scope.quotes = {};
  $scope.lookup = function () {
    GetQuotesFactory.getQuotes()
      .then(function () {
      console.log('hello')
    }) 
    .catch(function (error) {
      console.log(error);
    })
  }
})

    


    // .then(function(resp) {
    //     console.log('RESP DATA: ', resp)
    //     return resp.data;
    //   })


// var app = angular.module('myApp', []);
// app.controller('customersCtrl', function($scope, $http) {
//     $http.get("http://www.w3schools.com/angular/customers.php")
//     .success(function(response) {$scope.names = response.records;});
// });

  // angular.module('submitExample', [])
  //   .controller('ExampleController', ['$scope', function($scope) {
  //     $scope.list = [];
  //     $scope.text = 'hello';
  //     $scope.submit = function() {
  //       if ($scope.text) {
  //         $scope.list.push(this.text);
  //         $scope.text = '';
  //       }
  //     };
  //   }]);





