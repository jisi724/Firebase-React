import {
  auth,
  todoCollection,
  userCollection,
  timeStamp
} from "../../Firebase";
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
  todoCollection
    .add(todo)
    .then(() => dispatch({ type: types.ADD_TODOS_SUCCESS }))
    .catch(error => dispatch({ type: types.ADD_TODOS_FAILURE, error }));
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

export const fetchCurrentUser = () => dispatch => {
  auth.onAuthStateChanged(user =>
    dispatch({ type: types.FETCH_CURRENT_USER_SUCCESS, payload: user || null })
  );
};

export const signUp = (email, password) => dispatch => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => userCollection.add({
      email,
      createTime: timeStamp.fromDate(new Date())
    }))
    .catch(error =>
      dispatch({ type: types.FETCH_CURRENT_USER_ERROR, error: error.message })
    );
};

export const signIn = (email, password) => dispatch => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(result => console.log(result)) // no need to do anything as fetchUser will dispatch action
    .catch(error =>
      dispatch({ type: types.FETCH_CURRENT_USER_ERROR, error: error.message })
    );
};

export const signOut = () => dispatch => {
  auth
    .signOut()
    .then(result => console.log(result)) // no need to do anything as fetchUser will dispatch action
    .catch(error =>
      dispatch({ type: types.FETCH_CURRENT_USER_ERROR, error: error.message })
    );
};

export const subscribeAllUsers = () => dispatch => {
  dispatch({ type: types.FETCH_ALL_USERS_LOADING });
  userCollection.onSnapshot(snapshot =>
    dispatch({
      type: types.FETCH_ALL_USERS_SUCCESS,
      payload: snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      })
    })
  );
};