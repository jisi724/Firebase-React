import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/actions";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp(email, password));
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
