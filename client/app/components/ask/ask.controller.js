import firebase from 'firebase';


class AskController {
  constructor($scope, $firebaseObject) {
  	'ngInject';

	let ref = firebase.database().ref();

	this.question = $firebaseObject(ref.child('questions').push());
    this.name = 'ask';
    this.qData = {};
  }

  save () {
  	this.question.$value = this.qData;
  	this.question.$save().then(() => {
  		this.qData = {};
  	});
  }
}

export default AskController;
