import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";
import { useStateValue } from "./StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hwc4iBj4Pi4Ei1w4lCYfYE9yHOsxD3zmykt2DY27spaGqh6BX5rSz9wMJxzmDJrkGSTSlwSWjltK4IhOfTKiT8u00hQQgTD0W"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in / was logged in (in case of page refresh)
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
