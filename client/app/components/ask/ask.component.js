import template from './ask.html';
import controller from './ask.controller';
import './ask.scss';

let askComponent = {
  restrict: 'E',
  bindings: {
  	qData: '=',
  	user: '<',
  	disabled: '<'
  },
  template,
  controller
};

export default askComponent;
