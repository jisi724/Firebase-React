import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const AuthPage = () => {
  const auth = useSelector(state => state.auth);
  return (
    <div className={styles.authWrap}>
      {auth.profile && <Redirect to="/todos" />}
      <div className={styles.logo} />
      <h2>Todo App</h2>
      <Switch>
        <Route path="/auth/login" component={SignIn} />
        <Route path="/auth/register" component={SignUp} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default AuthPage;
