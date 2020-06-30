import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { TodoListContext } from "../../contexts/todo-context";
import { Action } from "../../reducers/TodoReducer";
import TodoEdit from "./TodoEdit"
import { serverTimestamp } from "../../firebase/firebase.config";

const TodoItem = (props) => {
  const { todos, dispatch } = useContext(TodoListContext);
  const [edit, setEdit] = useState(false)


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
  debugger
  dispatch({
    type: Action.STATUS_TODO,
    id: id,
    timestamp: serverTimestamp
  })
}
debugger
const handleDate = props.createdAt.toDate()
const date  = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(handleDate);



  return (
    <li className="list-group-item">
      <div><strong>{props.name}</strong></div>
      <div>{date}</div>
      {props.status ? (<div>
        <Button onClick={() => toggleTodo(props.id)} variant="success" block>
          Done
        </Button>
        <Button onClick={() => setEdit(true)} variant="primary" block>Edit</Button>
        edit
        </div>
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
