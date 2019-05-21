import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { signIn } from "../../redux/actions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <h3>Login</h3>
      <Form.Item>
        <Input
          prefix={<Icon type="user" className={styles.formIcon} />}
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item>
        <Input
          prefix={<Icon type="lock" className={styles.formIcon} />}
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.formButton}
        >
          Log in
        </Button>
        Or <Link to="/auth/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
