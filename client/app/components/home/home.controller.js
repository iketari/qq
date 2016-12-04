import firebase from 'firebase'

let us;

class HomeController {
	constructor($scope, $firebaseArray, $firebaseObject ,userService) {
		'ngInject';

		let qRef = firebase.database().ref().child('questions');

		this.qRef = qRef;
		this.$questions = $firebaseArray(qRef);

		this.voted = [];

		this.$scope = $scope;
		this.$firebaseObject = $firebaseObject;
		this.$firebaseArray = $firebaseArray;
		this.userService = userService;
		us = userService;

		this.$questions.$watch((event) => {
			Promise.all([userService.getUserId(), this.$questions.$loaded()])
			.then(([uid, data]) => {
				this._update(data, uid);
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

	_getUserVotes (question) {
		return 	this.userService.getUserId().then(uid => {
			let votesRef = this.qRef.child(question.$id).child('votes');
			let $votesArr = this.$firebaseArray(votesRef);

			return $votesArr.$loaded((votes) => {
				return {
					voted: !!votes.filter(vote => vote.uid === uid).length,
					votes,
					votesRef,
					uid
				};
			});
		});
	}

	_like (question, value) {
		this._getUserVotes(question).then(({voted, votesRef, uid}) => {
			if (!voted) {
				votesRef.push({uid});
				this._process(question, {like: value});
			} else {
				this.setVoted(question.uid);
			}
			this.$scope.$apply();
		});
	}

	up (question) {
		this._like(question, question.like !== void 0 ? question.like + 1 : 1);
	}

	down (question) {
		this._like(question, question.like !== void 0 ? question.like - 1 : 0);
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

	answer (question) {
		this._process(question, {
			answered: true,
			inprogress: false
		})
	}

	setVoted (uid) {
		this.voted.push(uid);
		setTimeout(() => {
			this.voted.shift();
			this.$scope.$apply();
		}, 1500);
	}

	isVoted (question) {
		return this.voted.includes(question.uid);
	}

	_update (questions, uid) {
		this.questions = questions;
		this.$scope.$apply();
	}

	_process (question, data) {
		let copy = Object.assign(question, data);
		this.$questions.$save(copy);
	}
}

export default HomeController;
