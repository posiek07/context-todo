import React from 'react';

import './App.css';
import TodoListContextProvider from './contexts/todo-context'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Navbar from './components/Navbar';

function App() {


  return (
    <TodoListContextProvider>
    <div className="App">
      <Navbar />
      <TodoForm />
      <TodoList /> 
    </div>
    </TodoListContextProvider>
  );
}

export default App;
