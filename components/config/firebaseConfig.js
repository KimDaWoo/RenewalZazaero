import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyBUB3OxK7EaEG5Xa2c39dHFM26fx9xbJOw",
  authDomain: "re-zazaero.firebaseapp.com",
  projectId: "re-zazaero",
  storageBucket: "re-zazaero.appspot.com",
  messagingSenderId: "745281710588",
  appId: "1:745281710588:android:b06b261142a9eccd21ea79",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth };
