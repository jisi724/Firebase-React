import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../redux/actions";
import { Router, Route, Switch } from "react-router-dom";
import AuthorizedRoute from "../utils/AuthorizedRoute";
import history from "../utils/customHistory";
import Nav from "./Nav";
import NotFoundPage from "./404Page";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import TodoPage from "./TodoPage";
import UsersPage from "./UsersPage";
import { Layout } from "antd";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const { Header, Footer, Content } = Layout;

  return (
    <Router history={history}>
      <Layout
        style={{
          background:
            "linear-gradient(-20deg, #e2ebf0, #d0b782 25%, #a0cecf 90%)"
        }}
      >
        <Header style={{ zIndex: 1, width: "100%" }}>
          <Nav />
        </Header>

        <Content
          style={{
            width: "100%",
            maxWidth: 1440,
            minHeight: "calc(100vh - 133px)",
            margin: "0 auto",
            paddingTop: 50
          }}
        >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/auth" component={AuthPage} />
            <AuthorizedRoute path="/todos" component={TodoPage} />
            <AuthorizedRoute path="/profile" component={ProfilePage} />
            <AuthorizedRoute path="/users" component={UsersPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Runhang Todo 2019 Created by Runhang Z
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
