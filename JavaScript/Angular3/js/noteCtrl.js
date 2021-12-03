app.controller('myNoteCtrl',function ($scope) {
	//剩余字数
	$scope.left = function () {
		return 100 - $scope.message.length;
	}
	//保存
	$scope.save = function () {
		alert("保存成功!");
	}
	//清除
	$scope.clear = function () {
		$scope.message = "";
	}
})