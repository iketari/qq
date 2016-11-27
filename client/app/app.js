import angular from 'angular';
import firebase from 'firebase';
import angularfire from 'angularfire';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';


let config = {
  apiKey: "AIzaSyBS3NgOJoNZ9NhYrq4WG7xLZM4RyeKn66w",
  authDomain: "qinq-9d53f.firebaseapp.com",
  databaseURL: "https://qinq-9d53f.firebaseio.com",
  storageBucket: "qinq-9d53f.appspot.com",
  messagingSenderId: "475423633554"
};
firebase.initializeApp(config);


angular.module('app', [
    uiRouter,
    angularfire,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
