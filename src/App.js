import React from 'react';

import './App.css';
import TodoListContextProvider from './context/context-store'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {


  return (
    <TodoListContextProvider>
    <div className="App">
      <TodoForm />
      <TodoList /> 
    </div>
    </TodoListContextProvider>
  );
}

export default App;
