import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { TodoListContext } from "../contexts/todo-context";
import { Action } from "../reducers/TodoReducer";

const TodoItem = (props) => {
  const { todos, dispatch } = useContext(TodoListContext);

    useEffect(() => {
        console.log('TodoItem rendered')
        return () => {
            console.log('TodoItem Unmount')
        }
    }, [])
  
const deleteTodo = (id) => {
  console.log(id)
  dispatch({
    type: Action.REMOVE_TODO,
    id: id
  })
}

const toggleTodo = (id) => {
  dispatch({
    type: Action.STATUS_TODO,
    id: id
  })
}

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
