import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Ask from './ask/ask';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Ask
])

.name;

export default componentModule;
