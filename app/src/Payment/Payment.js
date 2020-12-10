import React, { useState, useEffect } from "react";
import "./Payment.css";

import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../reducer";
import axios from "../axios";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const [clientSecret, setClientSecret] = useState("");


  useEffect(() => {
    // get client secret
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [cart])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);
      history.replace('/orders');
    })
  }

  const handleChange = (e) => {
    // stuff will go here
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>001 Prickly Pear Ln</p>
            <p>Phoenix, AZ</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct data={item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={( value ) => (
                    <h3>Order Total: {value} </h3>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}                
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{ processing ? "Processing" : "Buy now" }</span>
                </button>
              </div>
            </form>
            { error && <div>{error}</div> }
          </div>
        </div>        
      </div>
    </div>
  );
}

export default Payment;
