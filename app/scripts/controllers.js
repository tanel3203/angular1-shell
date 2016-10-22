(function () {
'use strict';

angular.module('myApp.controllers', [])
.controller('AppController', AppController)
.controller('MainController', MainController);

function AppController () {
	console.log("app ctrl initialized");
}

function MainController () {
	console.log("main ctrl initialized");
}
})();