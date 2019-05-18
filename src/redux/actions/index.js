import { todoCollection } from "../../Firebase";
import types from "./types";

export const fetchToDo = () => dispatch => {
  dispatch({ type: types.FETCH_TODOS_LOADING });
  todoCollection
    .get()
    .then(snapshot =>
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        payload: snapshot.docs.map(doc => doc.data())
      })
    )
    .catch(error =>
      dispatch({ type: types.FETCH_TODOS_FAILURE, error: error })
    );
};

export const subscribeTodo = () => dispatch => {
  dispatch({ type: types.FETCH_TODOS_LOADING });
  todoCollection.onSnapshot(snapshot =>
    dispatch({
      type: types.FETCH_TODOS_SUCCESS,
      payload: snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      })
    })
  );
};

export const addTodo = todo => dispatch => {
  dispatch({ type: types.ADD_TODOS_LOADING });
  todoCollection
    .add(todo)
    .then(() => dispatch({ type: types.ADD_TODOS_SUCCESS }))
    .catch(() => dispatch({ type: types.ADD_TODOS_FAILURE }));
};

export const updateTodo = todo => dispatch => {
  todoCollection
    .doc(todo.id)
    .set(
      {
        todo: todo.todo,
        complete: todo.complete
      },
      { merge: true }
    )
    .then(() => dispatch({ type: types.UPDATE_TODOS_SUCCESS }))
    .catch(() => dispatch({ type: types.UPDATE_TODOS_FAILURE }));
};
