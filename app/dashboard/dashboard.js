var app = angular.module("choochooApp");

app.controller("DashboardDataController", ["$scope", "PositionService", function($scope, PositionService) {
	$scope.currentLatitude = PositionService.getCurrentPosition().lat;
	$scope.currentLongitude = PositionService.getCurrentPosition().lon;
}]);
