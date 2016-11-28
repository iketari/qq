import firebase from 'firebase';


class AskController {
	constructor($scope, $firebaseObject, userService) {
		'ngInject';

		this.name = 'ask';
		this.userService = userService;
		this.disabled = false;

		let ref = firebase.database().ref();

		this.question = $firebaseObject(ref.child('questions').push());

		this.qData = {};

		userService.onChangeAuth(user => {
			if (!user) return;

			this.user = user;
		})
	}

	save () {
		this.disabled = true;
		this.userService.getUserId()
			.then(uid => {
				return this._checkUid(uid);
			}).then(this._saveToDb.bind(this), this._invalidUid.bind(this));
	}

	_checkUid (uid) {
		return new Promise((resolve) => {
			resolve(uid);
		});
	}

	_invalidUid () {

	}

	_saveToDb (uid) {
		this.qData.uid = uid;
		this.question.$value = this.qData;
		this.question.$save().then(() => {
			this.qData = {};
			this.disabled = false;
		});
	}
}

export default AskController;
