import React, {createContext, useReducer, useEffect, useState} from 'react';
import { todoReducer, Action } from '../reducers/TodoReducer'
import { getTasksRequest } from '../firebase/Firebase';

export const TodoListContext = createContext();

const TodoListContextProvider = props => {


  const [todos, dispatch] = useReducer(todoReducer, [])
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  useEffect(() => {
    console.log('TODOCONTEXT')
    getTasksRequest().then(res=>{
      dispatch({
        type: Action.GET_ALL_TODOS,
        res
      })
    })
  }, [])

  return (
    <TodoListContext.Provider value={{todos, dispatch, modal, setModal, editModal, setEditModal}}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider