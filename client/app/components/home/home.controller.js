import firebase from 'firebase'

class HomeController {
  constructor($scope, $firebaseArray) {
  	'ngInject';

  	let ref = firebase.database().ref()

    this.$questions = $firebaseArray(ref.child('questions'));

    this.$questions.$loaded().then((data) => {
    	this.questions = data;
    });

    this.name = 'home';
  }
}

export default HomeController;
