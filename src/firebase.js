import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNm6Kwv4rTyqZ-45tvYBU62pgV0Q6cobY",
    authDomain: "dashboard-12fa3.firebaseapp.com",
    projectId: "dashboard-12fa3",
    storageBucket: "dashboard-12fa3.appspot.com",
    messagingSenderId: "582521207852",
    appId: "1:582521207852:web:fc31c6dd0ed5aea3626589"
  };

  export const app = initializeApp(firebaseConfig);
  console.log(app);
  export const db = getFirestore(app);