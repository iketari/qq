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
      params: {
		from_ask: false
      },
      component: 'queue'
    });
})

.name;

export default queueModule;
