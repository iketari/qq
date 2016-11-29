import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
		url: '/',
		component: 'home',
		resolve: {
			// controller will not be loaded until $waitForAuth resolves
			// Auth refers to our $firebaseAuth wrapper in the example above
			currentAuth: ['userService',
				function (userService) {
				// $waitForAuth returns a promise so the resolve waits for it to complete
				return userService.waitForAuth();
			}]
		}
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
