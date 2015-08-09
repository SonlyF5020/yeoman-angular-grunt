'use strict';

/**
 * @ngdoc function
 * @name angularInActionApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularInActionApp
 */
angular.module('angularInActionApp')
  .controller('ContactCtrl', function ($scope, $http, $q) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.someModule = "test title";

    $scope.resultList = [];

    function requestOne() {
    	return $http.get("http://localhost:4567/one").success(function(data) {
    		console.log("first callback returned");
			$scope.resultList.push(data);
    	});
    }

    function requestTwo() {
    	return $http.get("http://localhost:4567/two").success(function(data) {
    		console.log("second callback returned");
			$scope.resultList.push(data);
    	});
    }

    function requestThree () {
    	return $http.get("http://localhost:4567/three").success(function(data) {
    		console.log("third callback returned");
			$scope.resultList.push(data);
    	});
    }

    function success (position) {
    	$scope.location = position.coords;
    }

    function error (err) {
    	console.warn('ERROR(' + error.code + '):' + err.message);
    }
    
    $scope.testRootRequest = function () {
    	requestOne();
    };

    $scope.testAnotherRequest = function () {
		requestTwo();
    };

    $scope.conbinedRequest = function () {
		requestOne().then(requestTwo).then(requestThree);
    };

    $scope.getLocation = function () {
    	navigator.geolocation.getCurrentPosition(success, error);
    };
  });
