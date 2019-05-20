import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { timeStamp } from '../../utils/firebaseTools'
import { addTodo } from "../../redux/actions";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleInput = e => setTodo(e.target.value);

  const handleSubmit = () => {
    dispatch(
      addTodo({
        todo,
        complete: false,
        createTime: timeStamp.fromDate(new Date())
      })
    );
    setTodo('');
  };

  return (
    <div>
      <h2>New Todo</h2>
      <input value={todo} onChange={handleInput} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddTodo;
