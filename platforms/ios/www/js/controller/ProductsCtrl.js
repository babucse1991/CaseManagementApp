angular.module('ProductsCtrl', [])

.controller('ProductsCtrl', function ($scope, products, $ionicLoading) {
	$ionicLoading.hide();
    $scope.products = products.data;
})