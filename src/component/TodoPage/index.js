import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import styles from "./index.module.css"

const TodoPage = () => (
  <div className={styles.todoWrap}>
    <AddTodo />
    <TodoList />
  </div>
);

export default TodoPage;
