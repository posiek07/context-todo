import React, {createContext, useState} from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = props => {
  const [todos, setTodos] = useState([
    { title: "Throw trashes", id: 1, status: false },
    { title: "Mash potatos", id: 2, status: false },
    { title: "Clean house", id: 3, status: true }
  ])

  const addTodo = (title) => {
    setTodos([...todos,{title, id: Math.random(), status: false}])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    const foundIndex= todos.findIndex(todo => todo.id === id)
    let newArr = [...todos]
    newArr[foundIndex].status = !todos[foundIndex].status
    setTodos(newArr)
    
  }

  return (
    <TodoListContext.Provider value={{todos, addTodo, deleteTodo, toggleTodo}}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider