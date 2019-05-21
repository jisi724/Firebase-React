import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Icon, Input, Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
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
    <Form onSubmit={handleSubmit} className={styles.form}>
      <h3>Register</h3>
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
          Register
        </Button>
        <Link to="/auth/login">Have account?</Link>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
