import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

function TodoPage() {
  return (
    <div>
      <TodoAdd />
      <TodoList />
    </div>
  );
}

export default TodoPage;
