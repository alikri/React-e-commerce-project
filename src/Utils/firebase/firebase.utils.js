
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore";

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
export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation})
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
}