angular.module('skuCreateListCtrl', []) .controller('skuCreateListCtrl', function($scope,skuCreateListService,localStorageService, $ionicLoading ) {
	  

	$scope.productTypeObject = {};	$scope.merchant_sku = {};
		/*var skuProducts = 'productList';
	var bearerTokenData = 'bearerToken';
	
	$scope.productLists = [];*/
	$scope.productList = {};
	$scope.productList.standard_product_codes=[]
	$scope.skuCreateList= function () {
		//var skuProducts=skuProducts;
		//console.log(">>>>>>>>>>$scope.skuProducts.length : "+ $scope.productLists.length);

		console.log(">>>>>>>$scope.merchant_sku>>>>>>"+ $scope.merchant_sku.id);
		$scope.productList.standard_product_codes.push($scope.productTypeObject);
		
		skuCreateListService.post($scope.productList, $scope.merchant_sku.id).success(function (response) {
			console.log(JSON.stringify(response));
			$ionicLoading.hide();
			$scope.productList = {};
			$scope.productTypeObject = {};
			//$scope.bearerToken= response;
		//	console.log(">>>>>>1st time login : " + JSON.stringify($scope.bearerToken));
			
		}).error(function (error) {
			alert(">>>>>>>>>>"+JSON.stringify(error));
			$ionicLoading.hide();
		});        

	}

});