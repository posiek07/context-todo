import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom'

import './App.css';
import TodoListContextProvider from './contexts/todo-context'

import Layout  from './Layout/Layout'
import TodoPage from './components/Todo/TodoPage';
import Calendar from './components/Calendar/Calendar';
import Done from './components/Done/Done';
function App() {

     let routes = ( <Switch>
     <Route path='/done' exact component= {Done} />
     <Route path='/calendar' exact component= {Calendar} />
     <Route path='/' exact component={TodoPage} /> </Switch>
     )



  return (
    <TodoListContextProvider>
    <div className="App d-block mx-auto w-75">
      <Layout />
      {routes}
    </div>
    </TodoListContextProvider>
  );
}

export default withRouter(App);
