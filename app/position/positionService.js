var positionService = angular.module("Position", []);

positionService.factory("PositionService", ["$rootScope", function($rootScope) {
	var currentPosition = {
		lat: 0.0,
		lon: 0.0
	};
	var startPosition = {
		lat: 0.0,
		lon: 0.0
	};
	var speed = 0.0;
	var direction = {
		x: 0.0,
		y: 0.5,
		z: 1.0
	};
	
	var update = function() {
		$rootScope.$apply();
	}
	
	return {
		currentPosition: currentPosition,
		startPosition: startPosition,
		speed: speed,
		direction: direction,
		update: update
	}
}]);
