import { useState } from "react"; 
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

// import { UserContext } from "../../contexts/user.context"; we centrilizing this feature via useEffect() in user.context.jsx

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../Utils/firebase/firebase.utils";

const defaultFormField = {
	email: "",
	password: ""
}

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormField);
	const { email, password } = formFields;

	// const { setCurrentUser } = useContext(UserContext); we centrilizing this feature via useEffect() in user.context.jsx

	console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormField);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
		// setCurrentUser(user);
		// await createUserDocumentFromAuth(user);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(email, password);
			// setCurrentUser(user); we centrilizing this feature via useEffect() in user.context.jsx
			resetFormFields();
			
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		
		setFormFields({ ...formFields, [name]: value });
	}

	return (
		<div className="sign-up-container">
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				
				<div className="buttons-container">
					<Button type="submit" >Sign In</Button>
					<Button type="button" buttonType="google" onClick={signInWithGoogle} >Google Sign In</Button>
				</div>
				
			</form>
		</div>
	)
}

export default SignInForm;