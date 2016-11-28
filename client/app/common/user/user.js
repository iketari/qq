import angular from 'angular';
import firebase from 'firebase';
import uiRouter from 'angular-ui-router';
import userComponent from './user.component';
import userService from './user.service';

window['firebase'] = firebase;

let userModule = angular.module('user', [
  uiRouter
])

.component('user', userComponent)

.service('userService', userService)

.name;

export default userModule;
