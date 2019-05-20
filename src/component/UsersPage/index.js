import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subscribeAllUsers } from "../../redux/actions";

const UserPage = function() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(subscribeAllUsers());
  }, [dispatch]);

  if (users.loading) {
    return (
      <div>
        <h1>Users Page</h1>
        <p>Loading...</p>
      </div>
    );
  } else if (users.data) {
    return (
      <div>
        <h1>Users Page</h1>
        {users.data.map(user => {
          return (
            <div key={user.id}>
              <span>{user.email}</span>
            </div>
          );
        })}
      </div>
    );
  }
};

export default UserPage;
