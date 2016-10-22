(function () {
'use strict';
angular.module('myApp', ['ui.router', 'myApp.controllers'])


	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
		$stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/app.html',
                        controller  : 'AppController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the main page
            .state('app.main', {
                url:'main',
                views: {
                    'content@': {
                        templateUrl : 'views/main.html',
                        controller  : 'MainController'                  
                    }
                }
            })

    $urlRouterProvider.otherwise('/');
    console.log("app.js initialized");
	}])

})();