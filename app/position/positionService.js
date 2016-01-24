var positionService = angular.module("Position", []);

positionService.factory("PositionService", [function() {
	var currentLatitude = 0.0;
	var currentLongitude = 0.0;
	var startLatitude = 0.0;
	var startLongitude = 0.0;
	var speed = 0.0;
	var direction = {
		x: 0.0,
		y: 0.5,
		z: 1.0
	};
	
	var setCurrentPosition = function (lat, lon) {
		currentLatitude = lat;
		currentLongitude = lon;
	}
	
	var setStartPosition = function(lat, lon) {
		startLatitude = lat;
		startLongitude = lon;
	}
	
	var setSpeed = function(spd) {
		speed = spd;
	}
	
	var setDirection = function (ax, ay, az) {
		direction.x = ax;
		direction.y = ay;
		direction.z = az;
	}
	
	var getCurrentPosition = function() {
		return {
			lat: currentLatitude,
			lon: currentLongitude
		}
	}
	
	var getStartPosition = function() {
		return {
			lat: startLatitude,
			lon: startLongitude
		}
	}
	
	var getSpeed = function() {
		return speed;
	}
	
	var getDirection = function () {
		return direction;
	}
	
	return {
		setCurrentPosition: setCurrentPosition,
		getCurrentPosition: getCurrentPosition,
		setStartPosition: setStartPosition,
		getStartPosition: getStartPosition,
		setSpeed: setSpeed,
		getSpeed: getSpeed,
		setDirection: setDirection,
		getDirection: getDirection
	}
}]);
