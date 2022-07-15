import React from "react";
import "./cart-item.styles.scss";

const CartItems = ({ item: { Name, image, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={image} alt="item" />
      <div className="item-details">
        <span className="name">{Name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
