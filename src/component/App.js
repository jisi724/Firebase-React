import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from '../redux/actions'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthorizedRoute from "../utils/AuthorizedRoute"
import Nav from './Nav'
import NotFoundPage from "./404Page";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import TodoPage from "./TodoPage";
import UsersPage from "./UsersPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auth" component={AuthPage} />
        <AuthorizedRoute path="/todos" component={TodoPage} />
        <AuthorizedRoute path="/profile" component={ProfilePage} />
        <AuthorizedRoute path="/users" component={UsersPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
