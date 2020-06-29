import React, {createContext, useReducer, useEffect} from 'react';
import { todoReducer, Action } from '../reducers/TodoReducer'
import { getTasksRequest } from '../firebase/Firebase';

export const TodoListContext = createContext();

const TodoListContextProvider = props => {


  const [todos, dispatch] = useReducer(todoReducer, [])
  console.log(todos)
  useEffect(() => {
    getTasksRequest().then(res=>{
      dispatch({
        type: Action.GET_ALL_TODOS,
        res
      })
    })
  }, [])

  return (
    <TodoListContext.Provider value={{todos, dispatch}}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider