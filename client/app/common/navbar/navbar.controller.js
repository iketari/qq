class NavbarController {
	constructor($scope, $firebaseArray, $firebaseAuth) {
		'ngInject';

		this.name = 'navbar';

		this.authObj = $firebaseAuth(firebase.auth());

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
}

export default NavbarController;
