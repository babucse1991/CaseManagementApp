angular.module('SkuDetailsCtrl', []).controller('SkuDetailsCtrl', function ($scope, skuUrlReturn, $ionicLoading) {
	console.log(">>>>>skuUrlReturn>>>>>>>>>>"+ JSON.stringify(skuUrlReturn));
	$scope.skuProducts = skuUrlReturn;
	$ionicLoading.hide();
});


