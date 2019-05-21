import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Menu } from "antd";
import "./index.scss";
import { signOut } from "../../redux/actions";

const App = () => {
  const currentUser = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(signOut());

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item onClick={handleLogOut}>
        <span>Log Out</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      {currentUser ? (
        <Link to="/todos" className="logo" />
      ) : (
        <Link to="/" className="logo" />
      )}

      <div className="menu-right">
        {currentUser ? (
          <Dropdown overlay={menu} >
            <div className="dropdown">
              <Avatar icon="user" />
              <span>{currentUser.email}</span>
            </div>
          </Dropdown>
        ) : (
          <Link to="/auth">Login / Signup</Link>
        )}
      </div>
    </div>
  );
};

export default App;
