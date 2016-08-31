angular.module('skuSettlementOrderDetailCtrl', []).controller('skuSettlementOrderDetailCtrl', function ($scope, settlement_idReportOrder,$ionicPopup, $ionicLoading) {
	
	$scope.skuSettlementOrderDetailProducts = settlement_idReportOrder;
	$ionicLoading.hide();
});


