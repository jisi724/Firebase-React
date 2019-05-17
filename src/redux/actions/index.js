import { todoCollection } from '../../Firebase'
import { FETCH_TODOS } from './types'

export const addToDo = newTodo => async dispatch => {
  todoCollection.add(newTodo)
}

export const completeTodo = completeToDo => async dispatch => {
  todoCollection.
}