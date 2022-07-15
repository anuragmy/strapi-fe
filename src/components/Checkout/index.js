/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Empty } from "antd";
import StripeCheckout from "react-stripe-checkout";
import "./checkout.styles.scss";
import CheckoutItem from "./CheckoutItem";
import Crown from "../../assets/crown.svg";

const Checkout = () => {
  const key = process.env.REACT_APP_STRIPE;
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const onToken = (token) => {
    alert("Payment Success");
  };

  return !items.length ? (
    <div className="empty">
      <Empty description="Please add items in your cart" />
    </div>
  ) : (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT NAME</span>
        </div>
        <div className="header-block price">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {items.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total">
        <span>TOTAL: &#x20B9; {total}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <StripeCheckout
          name="Crown Clothing" // the pop-in header title
          description={`Your total is ${total}`} // the pop-in header subtitle
          image={Crown}
          ComponentClass="div"
          label="Pay with Stripe" // text inside the Stripe button
          panelLabel="Pay Now" // text inside the Stripe button
          amount={total * 100} // cents
          currency="INR"
          email="anuragmy2729@gmail.com"
          shippingAddress
          zipCode
          allowRememberMe // "Remember Me" option (default true)
          token={onToken} // submit callback
          stripeKey={key}
        />
      </div>
    </div>
  );
};

export default Checkout;
