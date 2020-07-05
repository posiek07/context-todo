import React, { useContext } from "react";
import { TodoListContext } from "../../contexts/todo-context";
import TodoItem from "./TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./TodoList.css";

const TodoList = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <div>
      <h2 className="py-4">TODOS</h2>
      <div>
        <TransitionGroup className="todo-list">
          {todos.map((todo) =>
            todo.status ? (
              <CSSTransition key={todo.id} timeout={500} classNames="fade">
                <TodoItem
                  key={todo.id}
                  title={todo.title}
                  description={todo.description}
                  notes={todo.notes}
                  id={todo.id}
                  createdAt={todo.createdAt}
                  status={todo.status}
                />
              </CSSTransition>
            ) : null
          )}
        </TransitionGroup>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default TodoList;
