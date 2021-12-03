var app = angular.module('myApp',[]);
app.controller('myCtrl',function ($scope) {
	$scope.arr = [{name:'zs',content:'abc'},{name:'ls',content:'cab'},
	{name:'ww',content:'bca'},{name:'zs',content:'abc'}]
})