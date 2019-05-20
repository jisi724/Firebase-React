import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../redux/actions";

const App = () => {
  const currentUser = useSelector(state => state.auth.profile);
  const userState = currentUser ? currentUser.email : "Not Login";
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(signOut());
  return (
    <div>
      <span>Status: {userState}</span>
      {currentUser && <button onClick={handleLogOut}>Log Out</button>}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Login</NavLink>
        </li>
        <li>
          <NavLink to="/todos">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default App;
