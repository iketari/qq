import firebase from 'firebase';


class AskController {
	constructor($scope, $firebaseObject, $firebaseArray, userService) {
		'ngInject';

		this.name = 'ask';
		this.userService = userService;
		this.disabled = false;

		let ref = firebase.database().ref();

		this.ref = ref;
		this.question = $firebaseObject(ref.child('questions').push());
		this.qData = {};

		this.$firebaseObject = $firebaseObject;
		this.$firebaseArray = $firebaseArray;
		this.$scope = $scope;

		userService.onChangeAuth(user => {
			if (!user) return;

			this.user = user;
		})
	}

	save () {
		this.disabled = true;
		this.invalid = false;

		this.userService.getUserId()
			.then(uid => {
				return this._checkUid(uid).catch(this._invalidUid.bind(this));
			}).then(this._saveToDb.bind(this))
	}

	_checkUid (uid) {
		return new Promise((resolve, reject) => {

			let own = this.$firebaseArray(this.ref.child('questions')
						.orderByChild('uid').equalTo(uid));

			own.$loaded((questions) => {
				let inprogress = questions.find(q => q.inprogress);

				if (!inprogress) {
					resolve(uid);
				} else {
					reject();
				}
			}, reject);
		});
	}

	_invalidUid () {
		this.disabled = false;
		this.invalid = true;
	}

	_saveToDb (uid) {
		this.qData.uid = uid;
		this.qData.inprogress = true;

		this.question.$value = this.qData;
		this.question.$save().then(() => {
			this.qData = {};
			this.disabled = false;
		});
	}
}

export default AskController;
