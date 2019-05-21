import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subscribeTodo } from "../../redux/actions";
import TodoItem from "./TodoItem";
import { Flipper, Flipped } from "react-flip-toolkit";

const TodoList = function() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    if (todos.data.length === 0) {
      dispatch(subscribeTodo());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const list = todo => (
    <Flipped key={todo.id} flipId={todo.id}>
      {flippedProps => <TodoItem flippedProps={flippedProps} todo={todo} />}
    </Flipped>
  );

  if (todos.loading) {
    return (
      <div>
        <h2>Todo:</h2>
        <p>Loading...</p>
      </div>
    );
  } else if (todos.data) {
    return (
      <div>
        <Flipper flipKey={todos.data.filter(todo => todo.complete).length}>
          <h2>Todos</h2>
          {todos.data.map(todo => !todo.complete && list(todo))}

          <h3 style={{ marginTop: 20 }}>Complete</h3>
          {todos.data.map(todo => todo.complete && list(todo))}
        </Flipper>
      </div>
    );
  }
};

export default TodoList;
