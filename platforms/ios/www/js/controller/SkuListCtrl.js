angular.module('SkuListCtrl', []).controller('SkuListCtrl', function ($scope, skuListProducts, $ionicLoading) {


	$scope.itemsPerPage = 10;
	$scope.currentPage = 1;


	$scope.callSkuList = function () {
		if (!angular.isUndefined($scope.skuListProducts)) {
			$scope.skuLength = $scope.skuListProducts.length;	
		} else {
			$scope.skuLength = 0;
		}
		skuListProducts.get($scope.skuLength).success(function (response) {
			$ionicLoading.hide();
			if (!angular.isUndefined($scope.skuListProducts)) {
				$scope.skuListProducts.push.apply($scope.skuListProducts, response.sku_urls); 
			} else {
				$scope.skuListProducts = response.sku_urls;
			}
			console.log("$scope.skuListProducts ::: "+ JSON.stringify($scope.skuListProducts));
			$scope.currentPage=$scope.currentPage+10
		}).error(function (error) {
			alert(">>>>>>>>>>"+JSON.stringify(error));
			$ionicLoading.hide();
		});      
	};
	$scope.callSkuList();




})


.filter('offset', function () {
	return function (input, offset) {
		return (input instanceof Array) ? input.slice(+offset) : input; 
	}
});