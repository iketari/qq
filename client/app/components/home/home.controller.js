import firebase from 'firebase'

let us;

class HomeController {
  constructor($scope, $firebaseArray, userService) {
	'ngInject';

	let ref = firebase.database().ref();

	this.$questions = $firebaseArray(ref.child('questions'));

	this.$questions.$loaded().then((data) => {
		this.questions = data;
	});

	this.userService = userService;
	us = userService;

    this.name = 'home';
  }

  blocked (item) {
  	if (us && us.isAdmin()) {
  		return !item.removed;
  	}

  	return item.approved;
  }

  isAdmin () {
  	return this.userService.isAdmin();
  }

  up (question) {
  	question.like = question.like !== void 0 ? question.like + 1 : 1;
  	this.$questions.$save(question);
  }

  down (question) {
  	question.like = question.like !== void 0 ? question.like - 1 : 0;
  	this.$questions.$save(question);
  }

  delete (question) {
  	question.removed = true;
  	this.$questions.$save(question);
  }

  approve (question) {
  	question.approved = true;
  	this.$questions.$save(question);
  }
}

export default HomeController;
