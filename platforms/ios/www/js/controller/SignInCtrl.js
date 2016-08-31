angular.module('SignInCtrl', []) .controller('SignInCtrl', function($scope, $state,localStorageService, tokenService,$ionicPopup, $location, $ionicLoading ) {
	  
	var userData = 'userApiKey';
	var bearerTokenData = 'bearerToken';

	$scope.user = {
			"user":"6F11B196321D4C79FB503AD99AC82F30982CBFBE",
			"pass":"Kcg6nJqIOF3TojQk9sENX0QnBeI0OGHMeaF7D0P7LMDV",
			"merchantId":"b7f808daefae4f2e9d0d5303a6029df9"
			
	};

	$scope.createLogIn = function () {
		tokenService.post($scope.user).success(function (response) {
			$ionicLoading.hide();
			$scope.bearerToken= response;
			console.log("login token : " + JSON.stringify($scope.bearerToken));
			localStorageService.set(userData, $scope.user);
			localStorageService.set(bearerTokenData, $scope.bearerToken);
			$location.path("/tab/dash");
		}).error(function (error) {
			$ionicPopup.alert({
				title: 'Log In',
				content: 'Error!!!'
			}).then(function(res) {
				
			});
			$ionicLoading.hide();
		});     
		
	};
	
/*	$scope.getExistingUser = function () {
        if (localStorageService.get(userData)) {
            $scope.user = localStorageService.get(userData);
            $scope.createLogIn();
        } 
	}
	$scope.getExistingUser();*/
	
	
});