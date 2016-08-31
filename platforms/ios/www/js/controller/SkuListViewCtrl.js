angular.module('SkuListViewCtrl', []).controller('SkuListViewCtrl', function ($scope, skuProducts, localStorageService, $stateParams, $ionicLoading) {
      alert("sss")
	var skuId = 'NA1193';
	var skuId = $stateParams.listProduct;
	console.log($stateParams.listProduct)
    skuProducts.get($stateParams.listProduct).success(function (response) {
        $scope.skuProducts = response;
        $ionicLoading.hide();
       // $scope.skuProducts.standard_product_codes.stdProduct =skuProducts.response;
       // console.log(JSON.stringify($scope.skuProducts.standard_product_codes))
      }).error(function (error) {
			alert(">>>>>>>>>>"+JSON.stringify(error));
			$ionicLoading.hide();
		});         
    });
