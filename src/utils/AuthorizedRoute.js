import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props =>{
        if (auth.loading) {
          return <div>Loading...</div>
        }
        return auth.profile ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        );
      }}
    />
  );
};

export default AuthorizedRoute;
