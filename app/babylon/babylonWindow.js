var babylonWindow = angular.module("BabylonWindow", ["Position"]);

babylonWindow.directive("babylon",
	["PositionService", function(PositionService) {
		return {
			restrict: "A",
			link: function (scope, elem, attr) {
				canvas = elem[0];
				var engine = new BABYLON.Engine(canvas, true);
				var createScene = function() {
					var scene = new BABYLON.Scene(engine);
					var startPosition = PositionService.getStartPosition();
					var direction = PositionService.getDirection();
					
					var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0.0, 0.5, 0.0), scene);
					camera.setTarget(new BABYLON.Vector3(direction.x, direction.y, direction.z));
					camera.attachControl(canvas, false);
					var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,500,0), scene);
					var startPoint = BABYLON.Mesh.CreateSphere('sphere1', 16, 0.05, scene);
					scene.clearColor = BABYLON.Color3.FromInts(135, 206, 250);
					var materialGrey = new BABYLON.StandardMaterial("textureGrey", scene);
					materialGrey.diffuseColor = BABYLON.Color3.FromInts(238, 233, 233);
					
					var ground = BABYLON.Mesh.CreateGround('ground1', 200, 200, 2, scene);
					ground.material = materialGrey;
					return scene;
				}
				var scene = createScene();
				engine.runRenderLoop(function() {
					scene.render();
				});	
				window.addEventListener('resize', function() {
					engine.resize();
				});
			}
		}
	}]
);
