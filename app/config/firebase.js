import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDy2OExSyJkEVxDBY-HU53t69UBQOxIRPo",
    authDomain: "medfill.firebaseapp.com",
    databaseURL: "https://medfill.firebaseio.com",
    projectId: "medfill",
    storageBucket: "medfill.appspot.com",
    messagingSenderId: "1025859011548",
    appId: "1:1025859011548:web:50f56262ce9e554b710519"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebase };