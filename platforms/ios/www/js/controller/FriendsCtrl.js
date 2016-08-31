angular.module('FriendsCtrl', [])

.controller('FriendsCtrl', function ($scope, Friends) {
    $scope.friends = Friends.all();
})