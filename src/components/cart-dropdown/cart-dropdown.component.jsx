import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTON_TYPE_CLASSES}  from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}  buttonType={BUTTON_TYPE_CLASSES.dropdown} >GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;









// import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../button/button.component";
// import CartItem from "../cart-item/cart-item.component";

// import { CartContext } from "../../contexts/cart.context";
// import { DropdownButton } from "../button/button.styles";

// const CartDropdown = () => {
// 	const { cartItems } = useContext(CartContext);

// 	const navigate = useNavigate();

// 	const goToCheckoutHandler = () => {
// 		navigate("/checkout")
// 	}
// 	return (
// 		<CartDropdownContainer>
// 			<CartItems>
// 				{
// 					cartItems.length ? (cartItems.map((item) =>
// 					(<CartItem key={item.id} CartItem={item} />
// 					))) : (
// 							<EmptyMessage>Your cart is empty</EmptyMessage>
// 					)
// 				}
				
// 			</CartItems>
// 			<Button onClick={goToCheckoutHandler} buttonType={DropdownButton}>Go to checkout</Button>
// 		</CartDropdownContainer>
// 	)
// }

// export default CartDropdown;