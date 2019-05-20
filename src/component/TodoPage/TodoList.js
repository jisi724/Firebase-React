import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { subscribeTodo } from "../../redux/actions";
import TodoItem from './TodoItem';

const TodoList = function() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(subscribeTodo());
  }, [dispatch]);

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
        <h2>Todo:</h2>
        {todos.data.map(
          todo => !todo.complete && <TodoItem todo={todo} key={todo.id} />
        )}

        <h3>Complete:</h3>
        {todos.data.map(
          todo => todo.complete && <TodoItem todo={todo} key={todo.id} />
        )}
      </div>
    );
  }
};

export default TodoList;
