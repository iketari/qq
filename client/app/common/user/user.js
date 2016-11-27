import angular from 'angular';
import firebase from 'firebase';
import uiRouter from 'angular-ui-router';
import userComponent from './user.component';

window['firebase'] = firebase;

let userModule = angular.module('user', [
  uiRouter
])

.component('user', userComponent)

.service('userService', function ($firebaseAuth) {
	"ngInject";

	this.authObj = $firebaseAuth(firebase.auth());

	this._callbacks = [];

	this.authObj.$onAuthStateChanged((firebaseUser) => {
		console.log(firebaseUser);
		if (firebaseUser) {
			this.user = firebaseUser;
		} else {
			this.user = null;
		}

		this._callbacks.forEach(cb => cb(firebaseUser));
	});

	this.onChangeAuth = function (cb) {
		this._callbacks.push(cb);
	}

	this.auth = function () {
		this.authObj.$signInWithRedirect('google').then(() =>{})
			.catch((error) => {
				console.error("Authentication failed:", error);
			});
	}

	this.logOut = function () {
		this.authObj.$signOut();
	}

	this.getUser = function () {
		return this.user;
	}
})

.name;

export default userModule;
