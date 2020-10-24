import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";

import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";
import { useStateValue } from "./StateProvider";

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
