// import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/firebase/firebase.utils";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./sign-in.styles.scss"
const SignIn = () => {
	// const logGoogleUser = async () => {
	// 	const {user} = await signInWithGooglePopup();
	// 	console.log(user);
	// 	const userDocRef = await createUserDocumentFromAuth(user);
	// }
	return (
		<div className="sign-in-page">
			{/* <h1>Sing In Page</h1>
			<button onClick={logGoogleUser}>
				Sing in with Google Popup
			</button> */}
			<SignInForm />
			<SignUpForm />
		</div>
		
	)
}

export default SignIn;