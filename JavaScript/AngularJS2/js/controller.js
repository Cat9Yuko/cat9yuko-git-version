//定义模块
var app = angular.module("myApp",[]);
//定义controller
app.controller('myCtrl',function ($scope) {
	//定义控制器属性
	$scope.fName="月月鸟";
	$scope.lName="鸟月月";
	//定义控制器
	$scope.fullName = function () {
		return $scope.fName+"."+$scope.lName;
	}
	
})