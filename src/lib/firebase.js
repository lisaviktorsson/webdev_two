import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD-bgH7w81Tth31Kosd7OSoLlUANWE2JAc",
    authDomain: "register-test-62721.firebaseapp.com",
    projectId: "register-test-62721",
    storageBucket: "register-test-62721.appspot.com",
    messagingSenderId: "362771793802",
    appId: "1:362771793802:web:ace071d13099eaba43ea73",
    measurementId: "G-XDXVGRQKVW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
