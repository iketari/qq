import firebase from 'firebase';

window['firebase'] = firebase;

class QueueController {
	constructor($scope, $firebaseArray, $firebaseAuth) {
		'ngInject';
		let ref = firebase.database().ref();

		this.name = 'queue';
		this.authObj = $firebaseAuth(firebase.auth());

		this.$questions = $firebaseArray(ref.child('questions'));

		this.$questions.$loaded().then((data) => {
			this.questions = data;
		});

		this.authObj.$onAuthStateChanged((firebaseUser) => {
			console.log(firebaseUser);
			if (firebaseUser) {
				this.user = firebaseUser;
			} else {
				this.user = null;
			}
		});
	}

	auth () {
		this.authObj.$signInWithRedirect('google').then(() =>{})
			.catch((error) => {
				console.error("Authentication failed:", error);
			});
	}

	logout () {
		this.authObj.$signOut();
	}
}

export default QueueController;
