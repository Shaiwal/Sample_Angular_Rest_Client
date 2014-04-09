var frontEndApp = angular.module('RestClient', []);
frontEndApp.controller('RestCtrl', ['$scope','$http',
                                    function($scope, $http) {
	$scope.methods = [
	                  {methodName:'GET'},
	                  {methodName:'POST'}
	                  ];
	$scope.method = $scope.methods[0]; 
	
	$scope.params = [{key: '',value:''}];
	$scope.addNewKVParam = function() {
		var newItemNo = $scope.params.length+1;
		$scope.params.push({key: "",value:""});
	};
	$scope.setHeader4Post = function(){
		var reqMethod = $scope.method.methodName; 
		if(reqMethod == 'POST'){
			$scope.headerNameText = "Content-Type";
			$scope.headerValueText = "application/x-www-form-urlencoded";
			$scope.checkedName = true;
			$scope.checkedValue = true;
		}else{
			$scope.headerNameText = "";
			$scope.headerValueText = "";
			$scope.checkedName = false;
			$scope.checkedValue = false;
		}
	};
	
	/*$scope.showAddedParam = function(param) {
		return param.key === $scope.params[$scope.params.length-1].key;
	};*/

	
	$scope.headerNameText = "";
	$scope.headerValueText = "";
	$scope.reqBody = "";
	
	
	$scope.sendRequest = function() {
		//alert($scope.method.methodName + "   ...  "+$scope.urlText);
		var reqMethod = $scope.method.methodName; 
		var url = $scope.urlText;
		//var reqBody = $scope.reqBody;

		var headerName = "";

		headerName = $scope.headerNameText;
		var headerValue = "";
		headerValue = $scope.headerValueText;
		var headers = {headerName : headerValue}; 
		
		var queryParams = "";
		for(var i=0;i<$scope.params.length;i++){
			if(i == 0){
				queryParams = "?" + $scope.params[i].key + "=" + $scope.params[i].value;
			}else{
				queryParams = queryParams + "&" + $scope.params[i].key + "=" + $scope.params[i].value;
			}
			
		}
		//alert(queryParams);
		if(queryParams == "?="){
			queryParams = "";
		}
		url = url + queryParams;
		//alert(reqMethod + "  . . body "+ reqBody + " .. hn: "+ headerName + "  .. hv: "+ headerValue);
		if(headerName==null || headerName=="" || headerValue == null || headerValue == ""){
			headers = {};
		}
//		$http({method: reqMethod, url: url}).data: reqBody ,,headers : { headerName : headerValue }
		$http({method: reqMethod, url:url, headers : headers }).
		success(function(data, status, headers, config) {
			//alert("success status"+status+"  .... "+ data.firstName);
			$scope.loadingIsDone = true;
			$scope.content = data;

		}).
		error(function(data, status, headers, config) {
			//alert("error status"+status + "  . "+ data);
			$scope.loadingIsDone = true;
			$scope.content = "Error in Response: Status: "+ status + "  Error is::  "+ data;
		});
	};

}]);