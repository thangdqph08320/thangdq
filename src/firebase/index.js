  
import firebase from 'firebase';
import  'firebase/storage';


var config = {
    apiKey: "AIzaSyBWv87zmNXSukKcKwfUV7AfNtvN2c7vYJ8",
    authDomain: "project-35866.firebaseapp.com",
    databaseURL: "https://project-35866.firebaseio.com",
    projectId: "project-35866",
    storageBucket: "project-35866.appspot.com",
    messagingSenderId: "316095829413",
    appId: "1:316095829413:web:a73e1333bc52444d1ac44c"
};
// Initialize Firebase
firebase.initializeApp(config);
const storage = firebase.storage;

export{ 
     storage, firebase as default
}
