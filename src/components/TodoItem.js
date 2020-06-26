import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { TodoListContext } from "../context/context-store";

const TodoItem = (props) => {
  const { deleteTodo, toggleTodo } = useContext(TodoListContext);

    useEffect(() => {
        console.log('TodoItem rendered')
        return () => {
            console.log('TodoItem Unmount')
        }
    }, [])
  
  return (
    <li className="list-group-item">
      <div>{props.name}</div>
      {props.status ? (
        <Button onClick={() => toggleTodo(props.id)} variant="success" block>
          Done
        </Button>
      ) : (
        <Button onClick={() => toggleTodo(props.id)} variant="warning" block>
          Undone
        </Button>
      )}
      <Button onClick={() => deleteTodo(props.id)} variant="danger" block>
        Delete
      </Button>
    </li>
  );
};

export default TodoItem;
