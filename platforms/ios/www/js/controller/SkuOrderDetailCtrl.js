angular.module('SkuOrderDetailCtrl', []).controller('SkuOrderDetailCtrl', function ($scope, orderUrlReturn,$location,$window, $ionicLoading,$ionicPopup,skuCreatAcknowledgetService) {
	//alert( JSON.stringify(orderUrlReturn))
//	console.log(">>>>>skuOrderListProducts>>>>>>>>>>"+ JSON.stringify(orderUrlReturn));

	$scope.skuOrderDetailProducts = orderUrlReturn;

	$ionicLoading.hide();


	$scope.CreatAcknowledge = function(){
		var acknowledgData = {
				"acknowledgement_status": "accepted", 
				"alt_order_id": $scope.skuOrderDetailProducts.data.alt_order_id,
				"order_items": [
				                {
				                	"order_item_acknowledgement_status": "fulfillable",
				                	"order_item_id": $scope.skuOrderDetailProducts.data.order_items[0].order_item_id
				                }
				                ]
		};

		skuCreatAcknowledgetService.post(acknowledgData, $scope.skuOrderDetailProducts.data.merchant_order_id).success(function (response) {
			$ionicPopup.alert({
				title: 'Jet',
				content: 'Acknowledged!!!'
			}).then(function(res) {
				$location.path("/tab/status");

			});
			/*$scope.actPerformed=true;*/
			$ionicLoading.hide();
		}).error(function (error) {
			alert(">>>>>>>>>>"+JSON.stringify(error));
			$ionicLoading.hide();
		});        
	}

	$scope.CreatRegect = function(){
		var regectData = {
				"acknowledgement_status": "rejected - item level error", 
				"alt_order_id": $scope.skuOrderDetailProducts.data.alt_order_id,
				"order_items": [
				                {
				                	"order_item_acknowledgement_status": "nonfulfillable - no inventory",
				                	"order_item_id": $scope.skuOrderDetailProducts.data.order_items[0].order_item_id
				                }
				                ]
		};

		skuCreatAcknowledgetService.post(regectData, $scope.skuOrderDetailProducts.data.merchant_order_id).success(function (response) {
			$scope.actPerformed=true;
			console.log("response>>>>>" + JSON.stringify(response));
			$ionicLoading.hide();
		}).error(function (error) {
			alert(">>>>>>>>>>"+JSON.stringify(error));
			$ionicLoading.hide();
		});     
	}
});


