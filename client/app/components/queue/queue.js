import angular from 'angular';
import uiRouter from 'angular-ui-router';
import queueComponent from './queue.component';

let queueModule = angular.module('queue', [
  uiRouter
])

.component('queue', queueComponent)


.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
	.state('queue', {
		url: '/queue',
		resolve: {
			// controller will not be loaded until $waitForAuth resolves
			// Auth refers to our $firebaseAuth wrapper in the example above
			currentAuth: ['userService',
				function (userService) {
				// $waitForAuth returns a promise so the resolve waits for it to complete
				return userService.waitForAuth();
			}]
		},
		params: {
			from_ask: false
		},
		component: 'queue'
	});
})

.name;

export default queueModule;
