import firebase from 'firebase';

window['firebase'] = firebase;

class QueueController {
	constructor($scope, $firebaseArray, userService) {
		'ngInject';
		let ref = firebase.database().ref();

		this.name = 'queue';

		this.$questions = $firebaseArray(ref.child('questions'));

		this.$questions.$loaded().then((data) => {
			this.questions = data;
		});

		userService.onChangeAuth((user) => {
			this.user = user;
		})
	}

	auth () {
		userService.auth();
	}

	logout () {
		userService.logOut();
	}
}

export default QueueController;
