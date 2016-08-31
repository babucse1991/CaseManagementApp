angular.module('RePasswordCtrl', []) .controller('RePasswordCtrl', function($scope, $state,localStorageService, $ionicModal) {
	  
	 /* $scope.signIn = function(user) {
	    console.log('Sign-In', user);
	    $state.go('tab.dash');
	  };*/
	//store the entities name in a variable
	var userData = 'user';

	//initialize the tasks scope with empty array
	$scope.users = [];

	//initialize the task scope with empty object
	$scope.user = {};
	$scope.createLogIn = function () {
		 //creates a new task
       $scope.users.push($scope.user);
       localStorageService.set(userData, $scope.users);
       $scope.user = {};
       //close new task modal
     //  $scope.newTaskModal.hide();
	}
	$scope.getLogIn = function () {
	    //fetches task from local storage
		 //fetches task from local storage
        if (localStorageService.get(userData)) {
            $scope.users = localStorageService.get(userData);
        } else {
            $scope.users = [];
        }
	}
	
	
	
});