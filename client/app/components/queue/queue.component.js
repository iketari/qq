import template from './queue.html';
import controller from './queue.controller';
import './queue.scss';

let queueComponent = {
  restrict: 'E',
  bindings: {
  	user: '<',
  	questions: '<',
  	$stateParams: '<'
  },
  template,
  controller
};

export default queueComponent;
