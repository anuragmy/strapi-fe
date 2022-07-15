import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "../CartItem";
import "./cart-dropdown.styles.scss";
import { CustomButton } from "../CustomButton";
import { toggleCart } from "../actions";

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span id="empty" className="empty">
            Your Cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCart());
          history.push("/checkout");
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
