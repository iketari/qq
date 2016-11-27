class QueueController {
  constructor($scope, $firebaseArray) {
  	'ngInject';

  	// let ref = firebase.database().ref()

   //  this.messages = $firebaseArray(ref.child('questions'));

    this.name = 'queue';
  }
}

export default QueueController;
