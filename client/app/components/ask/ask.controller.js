import firebase from 'firebase';


class AskController {
	constructor($scope, $firebaseObject, userService) {
		'ngInject';

		this.name = 'ask';
		this.userService = userService;

		let ref = firebase.database().ref();

		this.question = $firebaseObject(ref.child('questions').push());

		this.qData = {};

		userService.onChangeAuth(user => {
			if (!user) return;

			this.user = user;
		})
	}

	save () {
		this.qData.uid = this.userService.getUserId();
		this.question.$value = this.qData;

		this.question.$save().then(() => {
			this.qData = {};
		});
	}
}

export default AskController;
