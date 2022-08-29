import { Fragment , useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { auth, signOutUser } from "../../Utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => { //it's a TOP level component now!!!
	const { currentUser, setCurrentUser } = useContext(UserContext);
	// console.log(currentUser);

	const signOutHandler = async () => {
		await signOutUser(auth);
		setCurrentUser(null);
	}
	

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					{currentUser ? (
							<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
						) : ( <Link className="nav-link" to="/auth">
									SIGN IN
								</Link> 
						) 
					}
					
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;