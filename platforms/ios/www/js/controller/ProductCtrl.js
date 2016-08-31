angular.module('ProductCtrl', [])

.controller('ProductCtrl', function ($scope, product, $ionicLoading) {
	$ionicLoading.hide();
	console.log(">>>>>product>>>>>>>>>>"+ JSON.stringify(product));
    $scope.product = product.data;
});
