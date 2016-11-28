import firebase from 'firebase';

export default function ($firebaseAuth) {
	"ngInject";

	const ADMINS_UIDS = [
		'7BQgSlXJ4HNVUmRAulgXjqJ4LuD2',
		'8AMg7AGBmjWEZGNbsSLHdQilycI3',
		'D7RFkKdcrFeyWpXmEm9ZXk5LWoG3'
	];

	this.authObj = $firebaseAuth(firebase.auth());
	this._callbacks = [];

	this.authObj.$onAuthStateChanged((firebaseUser) => {
		console.log(firebaseUser);
		if (firebaseUser) {
			this.user = firebaseUser;
		} else {
			this.user = null;
		}

		this._callbacks.forEach(cb => cb(firebaseUser));
	});

	this.isAdmin = function () {
		return this.user && ADMINS_UIDS.includes(this.user.uid);
	}

	this.onChangeAuth = function (cb) {
		this._callbacks.push(cb);
	}

	this.auth = function () {
		this.authObj.$signInWithRedirect('google').then(() =>{})
			.catch((error) => {
				console.error("Authentication failed:", error);
			});
	}

	this.logOut = function () {
		this.authObj.$signOut();
	}

	this.getUser = function () {
		return this.user;
	}

	this.getUserId = function () {
		return new Promise ((resolve, reject) => {
			let user = this.authObj.$getAuth();
			if (!user) {
				return this.authObj.$signInAnonymously()
					.then(user => user.uid);
			} else {
				resolve(user.uid);
			}
		});
	}
}