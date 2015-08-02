'use strict';

angular.module("capecrossing")
  .controller("LifestyleCtrl", ['$scope', 'parallaxHelper', function ($scope, parallaxHelper) {
  	$scope.background = parallaxHelper.createAnimator(-0.3);
  }]);
