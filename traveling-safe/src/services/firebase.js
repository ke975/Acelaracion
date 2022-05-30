import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBukPh_3dk5JVTI54rnB5M-qTeT8xv_Jlo",
  authDomain: "incubation-9e36d.firebaseapp.com",
  projectId: "incubation-9e36d",
  storageBucket: "incubation-9e36d.appspot.com",
  messagingSenderId: "253670109423",
  appId: "1:253670109423:web:23080b827e147cb133eb1a"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);