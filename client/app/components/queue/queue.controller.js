import firebase from 'firebase';

window['firebase'] = firebase;

class QueueController {
	constructor($scope, $state, $stateParams, $firebaseArray, userService) {
		'ngInject';
		let ref = firebase.database().ref();

		this.name = 'queue';
		this.userService = userService;
		this.$stateParams = $stateParams;

		this.$questions = $firebaseArray(ref.child('questions'));

		this.$questions.$loaded().then((data) => {
			this.questions = data;
		});

		this.user = userService.getUser();
		userService.onChangeAuth((user) => {
			this.user = user;
			$scope.$apply();
		});
	}

	getLength () {
		return this.questions && this.questions.filter(q => {
			return q.approved && !q.removed
		}).length;
	}

	auth () {
		this.userService.auth();
	}

	logout () {
		this.userService.logOut();
	}
}

export default QueueController;
