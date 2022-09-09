// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

import {initializeFirestore} from 'firebase/firestore';

//import firebase realtime database from firebase

const firebaseConfig = {
  apiKey: 'AIzaSyAh7YjR_uk7AjA0CGMYwCvfPwLsvV0Jwgs',
  authDomain: 'shopping-d7169.firebaseapp.com',
  projectId: 'shopping-d7169',
  storageBucket: 'shopping-d7169.appspot.com',
  messagingSenderId: '99507407547',
  appId: '1:99507407547:web:cf73c23ef1a7783123f79e',
  measurementId: 'G-93RGDK0GRX',
};
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {db};
