import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subscribeAllUsers } from "../../redux/actions";

const UserPage = function() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    if (users.data.length === 0) {
      dispatch(subscribeAllUsers());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
