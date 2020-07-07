import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";
import TodoListContextProvider from "./contexts/todo-context";

import Layout from "./Layout/Layout";
import TodoPage from "./components/Todo/TodoPage";
import Calendar from "./components/Calendar/Calendar";
import Done from "./components/Done/Done";
function App() {
  let routes = (
    <Switch>
       <Route path="/" exact component={TodoPage} />
      <Route path="/done" component={Done} />
      <Route path="/calendar" component={Calendar} />
      <Route render={() => <h1 style={{textAlign: "center"}}>NOT FOUND!!!</h1>} />
     
    </Switch>
  );

  return (
    <TodoListContextProvider>
      <div className="App container mx-auto w-lg-75">
        <Layout />
        {routes}
      </div>
    </TodoListContextProvider>
  );
}

export default withRouter(App);
