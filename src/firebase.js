import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR4gPOC72C_ZSUDWVc6ePELo6UPQRVfIc",
  authDomain: "oauth-react-63325.firebaseapp.com",
  projectId: "oauth-react-63325",
  storageBucket: "oauth-react-63325.appspot.com",
  messagingSenderId: "378819148656",
  appId: "1:378819148656:web:0e209bd501a1d7d9b16db5",
  measurementId: "G-EMCNMT9JRD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
