import firebase from 'firebase'

let us;

class HomeController {
	constructor($scope, $firebaseArray, userService) {
		'ngInject';

		let ref = firebase.database().ref();

		this.$questions = $firebaseArray(ref.child('questions'));

		this.$scope = $scope;
		this.userService = userService;
		us = userService;

		// Promise.all([userService.getUserId(), this.$questions.$loaded()])
		// .then(([uid, data]) => {
		// 	this._setMine(data, uid);
		// });

		this.$questions.$watch((event) => {
			Promise.all([userService.getUserId(), this.$questions.$loaded()])
			.then(([uid, data]) => {
				this._setMine(data, uid);
			});
		})

		this.name = 'home';
	}

	blocked (item) {
		if (us && us.isAdmin()) {
			return !item.removed;
		}

		return !item.removed && item.approved;
	}

	isAdmin () {
		return this.userService.isAdmin();
	}

	up (question) {
		this._process(question, {like: question.like !== void 0 ? question.like + 1 : 1});
	}

	down (question) {
		this._process(question, {like: question.like !== void 0 ? question.like - 1 : 0});
	}

	delete (question) {
		this._process(question, {
			removed: true,
			inprogress: false
		});
	}

	approve (question) {
		this._process(question, {
			approved: true,
			inprogress: false
		});
	}

	_setMine (questions, uid) {
		questions.forEach(question => {
			question.mine = question.uid === uid;
		});

		this.questions = questions;
		this.$scope.$apply();
	}

	_process (question, data) {
		Object.assign(question, data);
		this.$questions.$save(question);
	}
}

export default HomeController;
