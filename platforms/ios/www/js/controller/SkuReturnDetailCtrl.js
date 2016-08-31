angular.module('SkuReturnDetailCtrl', []).controller('SkuReturnDetailCtrl', function ($scope, returnUrlReturn,$ionicPopup, $ionicLoading, skuCompleteReturnService,$location,$state) {

	$scope.skuReturnDetailProducts = returnUrlReturn;
	$ionicLoading.hide();
	$scope.creatCompleteReturn = function(){

		var completeReturn = {
				"merchant_order_id":$scope.skuReturnDetailProducts.data.merchant_order_id,
				"alt_order_id": $scope.skuReturnDetailProducts.data.alt_order_id,
				"items": [
				          {
				        	  "order_item_id":$scope.skuReturnDetailProducts.data.return_merchant_SKUs[0].order_item_id ,
				        	  "total_quantity_returned":$scope.skuReturnDetailProducts.data.return_merchant_SKUs[0].return_quantity ,
				        	  "order_return_refund_qty":$scope.skuReturnDetailProducts.data.return_merchant_SKUs[0].return_quantity ,
				        	  "refund_amount": {
				        		  "principal":$scope.skuReturnDetailProducts.data.return_merchant_SKUs[0].requested_refund_amount.principal, 
				        		  "tax":0,
				        		  "shipping_cost":$scope.skuReturnDetailProducts.data.return_merchant_SKUs[0].requested_refund_amount.shipping_cost,
				        		  "shipping_tax":0
				        	  }
				          }
				          ],
				          "agree_to_return_charge": true
		};

		skuCompleteReturnService.post(completeReturn, $scope.skuReturnDetailProducts.data.merchant_return_authorization_id).success(function (response) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: 'Jet',
				content: 'Returned!!!'
			}).then(function(res) {
				$location.path("/tab/status");
				/*$state.go('tab.status',  {reload: true})*/
			});

		}).error(function (error) {
			alert(">>>>>>>>>>"+JSON.stringify(error));
			$ionicLoading.hide();
		});         
	};






});


