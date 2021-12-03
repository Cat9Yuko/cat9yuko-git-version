var app = angular.module('myApp',[]);
app.controller('myCtrl',function ($scope) {
	$scope.firstName = "YUEYUE";
	$scope.lastName = "niao";
	$scope.fullName = function () {
		return $scope.firstName+"."+$scope.lastName;
	}	
});