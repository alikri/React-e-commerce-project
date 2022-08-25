import { signInWithGooglePopup } from "../../Utils/firebase/firebase.utils"


const SignIn = () => {
	const logGoogleUser = async () => {
		const response = await signInWithGooglePopup();
		console.log(response);
	}
	return (
		<div>
			<h1>Sing In Page</h1>
			<button onClick={logGoogleUser}>
				Sing in with Google Popup
			</button>
		</div>
		
	)
}

export default SignIn;