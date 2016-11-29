import angular from 'angular';
import uiRouter from 'angular-ui-router';
import askComponent from './ask.component';

let askModule = angular.module('ask', [
  uiRouter
])

.component('ask', askComponent)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('ask', {
		url: '/ask',
		component: 'ask',
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

.name;

export default askModule;
