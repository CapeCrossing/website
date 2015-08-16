'use strict';

angular.module("capecrossing")
  .controller("ResidencesCtrl", function ($scope) {
    $scope.myInterval = 2000;
    $scope.slides = [
      {
        image: 'assets/images/livingroom_web.jpg'
      },
      {
        image: 'assets/images/bedroom.jpg'
      },
      {
        image: 'assets/images/kitchen_web.jpg'
      },
    ];
	$scope.plans = 0;
	$scope.floorplans = function(input){
		$scope.plans = input;	
		return;
	}
  });
