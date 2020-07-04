import React, { useContext } from "react";
import { TodoListContext } from "../../contexts/todo-context";
import TodoItem from "../Todo/TodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../Todo/TodoList.css";

function Done() {

    const { todos } = useContext(TodoListContext);

    return (
        
        <div>
                  <h1>
        Done list:
        <br />
      </h1>
      <div>
        <TransitionGroup className="todo-list">
          {todos.map((todo) =>
            !todo.status ? (
              <CSSTransition key={todo.id} timeout={500} classNames="fade">
                <TodoItem
                  key={todo.id}
                  description={todo.description}
                  title={todo.title}
                  notes={todo.notes}
                  id={todo.id}
                  createdAt={todo.createdAt}
                  status={todo.status}
                />
              </CSSTransition>
            ) : null
          )}
        </TransitionGroup>
        <div></div>
      </div>
        </div>
    )
}

export default Done
