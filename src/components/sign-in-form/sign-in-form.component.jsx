import { useState } from "react"; 
import Button from "../button/button.component";
import { signInWithGooglePopup, createUserDocumentFromAuth, userSignInWithEmailAndPassword } from "../../Utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";


const defaultSignInFormField = {
	email: "",
	password: ""
}

const SignInForm = () => {

	const [signInFormField, setSignInFormField] = useState(defaultSignInFormField);
	const { email, password } = signInFormField;

	console.log(signInFormField);

	const logGoogleUser = async () => {
		const {user} = await signInWithGooglePopup();
		console.log(user);
		const userDocRef = await createUserDocumentFromAuth(user);
	}


	const handleSignIn = async (event) => {
		event.preventDefault();

		try {
			const { user } = await userSignInWithEmailAndPassword(email, password);
			console.log(user);
			
			
		} catch (error) {
				alert("No account with email provided");
		
		}

	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		
		setSignInFormField({ ...signInFormField, [name]: value });
	}
	return (
		<div className="sign-up-container">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSignIn}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email} />
			
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password} />
				<Button onClick={handleSignIn}>
					Sing in 
					</Button>
				<Button onClick={logGoogleUser}>
					Sing in with Google Popup
					</Button>
			</form>
		</div>
	)
}

export default SignInForm;