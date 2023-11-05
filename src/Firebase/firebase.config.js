

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvzv0glNVsfOEHIW_EfumXIGc9Y-b5UQ0",
  authDomain: "blogbloom-0006.firebaseapp.com",
  projectId: "blogbloom-0006",
  storageBucket: "blogbloom-0006.appspot.com",
  messagingSenderId: "862267072899",
  appId: "1:862267072899:web:5dc1711c9fd75a79a316b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;