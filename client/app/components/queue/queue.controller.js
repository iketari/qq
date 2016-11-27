import firebase from 'firebase';

window['firebase'] = firebase;

class QueueController {
	constructor($scope, $firebaseArray, userService) {
		'ngInject';
		let ref = firebase.database().ref();

		this.name = 'queue';
		this.userService = userService;

		this.$questions = $firebaseArray(ref.child('questions'));

		this.$questions.$loaded().then((data) => {
			this.questions = data;
		});

		userService.onChangeAuth((user) => {
			this.user = user;
		});
	}

	auth () {
		this.userService.auth();
	}

	logout () {
		this.userService.logOut();
	}
}

export default QueueController;
