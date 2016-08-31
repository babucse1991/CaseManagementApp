angular.module('skuSettlementListCtrl', []).controller('skuSettlementListCtrl', function ($scope, skuSettlementListProducts,$stateParams, $ionicLoading,settlement_daysReturn) {
	
	$scope.skuSettlementListProducts = settlement_daysReturn;      
	$ionicLoading.hide();
  });
