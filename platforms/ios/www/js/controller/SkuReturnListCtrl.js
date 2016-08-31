angular.module('skuReturnListCtrl', []).controller('skuReturnListCtrl', function ($scope, skuReturnListProducts,$stateParams, $ionicLoading) {
	
	var returns = $stateParams.returns;
	
	skuReturnListProducts.get(returns).success(function (response) {
		
        $scope.skureturnListProducts = response;
        
       $ionicLoading.hide();
     
      }).error(function (error) {
			alert(">>>>>>>>>>"+JSON.stringify(error));
			$ionicLoading.hide();
		});        
     
  });
