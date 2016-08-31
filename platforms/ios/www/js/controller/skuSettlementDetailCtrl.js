angular.module('skuSettlementDetailCtrl', []).controller('skuSettlementDetailCtrl', function ($scope, settlement_idReturn,$ionicPopup, $ionicLoading, skuCompleteReturnService,$location,$state) {
	$scope.skuSettlementDetailProducts = settlement_idReturn;
	$ionicLoading.hide();
});


