import { Fragment , useContext} from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/card-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext} from "../../contexts/cart.context";

import { signOutUser } from "../../Utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => { //it's a TOP level component now!!!
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);


	// console.log(currentUser);

	// const signOutHandler = async () => {
	// 	await signOutUser(auth);
	// 	setCurrentUser(null);
	// }    
	// we centrilizing this feature via useEffect() in user.context.jsx 
	// Here we only need signOutUser(auth), and we call in in UI below 
	

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
							<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
						) : ( <Link className="nav-link" to="/auth">
									SIGN IN
								</Link> 
						) 
					}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
				{/* it will try to evaluate the thruthiness of both sides. On the rigth side is a component.
				 Component is always a true value. So, if both are true, it will return the last value, which is a component in this case.
				 If the first value is false, it won't return anything. So, here basically if both are true - the dropdown will show up */}

			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation;