import { createContext, useState, useEffect } from "react"; 
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../Utils/firebase/firebase.utils";
// as the actual value you want to access 
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});


// user provider is an actual component 
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubcribe = onAuthStateChangedListener((user) => { 
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		})
		return unsubcribe;  // by this return we are saying to run unsubscribe whenever you unmount, 
		// because useEffect will run return func whenever it unmounts
	 }, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}