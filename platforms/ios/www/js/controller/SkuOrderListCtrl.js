angular.module('SkuOrderListCtrl', []).controller('SkuOrderListCtrl', function ($scope, skuOrderListProducts,$stateParams, $ionicLoading) {
      
	
	 var status = $stateParams.status;
	skuOrderListProducts.get(status).success(function (response) {
        $scope.skuOrderListProducts = response;
        $ionicLoading.hide();
      }).error(function (error) {
			alert(">>>>>>>>>>"+ error);
			$ionicLoading.hide();
		});          
     
  });
