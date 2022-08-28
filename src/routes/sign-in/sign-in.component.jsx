import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		console.log(user);
		const userDocRef = await createUserDocumentFromAuth(user);
	}
	return (
		<div>
			<h1>Sing In Page</h1>
			<button onClick={logGoogleUser}>
				Sing in with Google Popup
			</button>
			<SignUpForm />
		</div>
		
	)
}

export default SignIn;