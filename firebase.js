// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

import {initializeFirestore} from 'firebase/firestore';

//import firebase realtime database from firebase

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESUREMENT_ID,
};
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {db};
