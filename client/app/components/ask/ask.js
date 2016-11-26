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
      component: 'ask'
    });
})

.name;

export default askModule;
