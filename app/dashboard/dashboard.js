var app = angular.module("choochooApp");

app.controller("DashboardDataController", ["$scope", "PositionService", function($scope, PositionService) {
	$scope.PositionService = PositionService;
	
	$scope.currentLatitude = PositionService.currentPosition.lat;
	$scope.currentLongitude = PositionService.currentPosition.lon;
	
	$scope.$watch('PositionService.currentPosition', function(newVal) {	
		if (newVal) {
			$scope.currentLatitude = newVal.lat;
			$scope.currentLongitude = newVal.lon;
		}
	});
}]);
