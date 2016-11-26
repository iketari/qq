import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Ask from './ask/ask';
import Queue from './queue/queue';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Ask,
  Queue
])

.name;

export default componentModule;
