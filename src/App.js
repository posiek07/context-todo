import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom'

import './App.css';
import TodoListContextProvider from './contexts/todo-context'

import Layout  from './Layout/Layout'
import TodoPage from './components/Todo/TodoPage';
import Calendar from './components/Calendar/Calendar';
import MyNotes from './components/MyNotes/MyNotes';
function App() {

     let routes = ( <Switch>
     <Route path='/mynotes' component= {MyNotes} />
     <Route path='/calendar' component= {Calendar} />
     <Route path='/' exact component={TodoPage} /> </Switch>
     )



  return (
    <TodoListContextProvider>
    <div className="App">
      <Layout />
      {routes}
    </div>
    </TodoListContextProvider>
  );
}

export default withRouter(App);
