angular.module('skuSettlementReturnDetailCtrl', []).controller('skuSettlementReturnDetailCtrl', function ($scope, settlement_idReturn,$ionicPopup, $ionicLoading) {
	$scope.skuSettlementReturnDetailProducts = settlement_idReturn;
	$ionicLoading.hide();
});


