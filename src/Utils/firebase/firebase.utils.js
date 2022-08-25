
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithEmailLink, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDpdSCxty8IpJxfpWL_FHnVsI7JZFdvX3A",
	authDomain: "react-e-commerce-22.firebaseapp.com",
	projectId: "react-e-commerce-22",
	storageBucket: "react-e-commerce-22.appspot.com",
	messagingSenderId: "721068763868",
	appId: "1:721068763868:web:82650b8ce49ea3fbf16219"
  };
  
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);