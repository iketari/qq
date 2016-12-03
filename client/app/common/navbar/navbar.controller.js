class NavbarController {
	constructor($scope, $firebaseArray, userService) {
		'ngInject';

		this.name = 'navbar';
		this.user = userService.getUser();
		this.hint = false;
		userService.onChangeAuth((user) => {
			this.user = user;
			$scope.$apply();
		});
	}
}

export default NavbarController;
