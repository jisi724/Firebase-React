import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { timeStamp } from "../../utils/firebaseTools";
import { addTodo } from "../../redux/actions";
import { Input, Button } from "antd";
import styles from "./index.module.css";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleInput = e => setTodo(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addTodo({
        todo,
        complete: false,
        createTime: timeStamp.now()
      })
    );
    setTodo("");
  };

  return (
    <form className={styles.newTodo} onSubmit={handleSubmit}>
      <Input value={todo} onChange={handleInput} placeholder="New To Do" />
      <Button
        type="submit"
        shape="circle"
        icon="plus"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default AddTodo;
