import React from "react";
import { updateTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";

const TodoItem = props => {
  const todo = props.todo;
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(updateTodo({ ...todo, complete: !todo.complete }));
  };

  return (
    <div>
      <input type="checkbox" checked={todo.complete} onChange={handleCheck} />
      <span style={{ color: todo.complete ? "red" : "" }}>{todo.todo}</span>
    </div>
  );
};

export default TodoItem;
