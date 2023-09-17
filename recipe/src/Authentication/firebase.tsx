// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnd9lpa1UXnScCFDavCxAxkN0diNhqsA4",
  authDomain: "recipeapp-7b6c1.firebaseapp.com",
  projectId: "recipeapp-7b6c1",
  storageBucket: "recipeapp-7b6c1.appspot.com",
  messagingSenderId: "530304608452",
  appId: "1:530304608452:web:89813f564844f71ad98191",
  measurementId: "G-Z9WW7967M5"
};


// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);