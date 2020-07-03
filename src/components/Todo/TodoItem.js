import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from '../Modal/Modal'
import { TodoListContext } from "../../contexts/todo-context";
import { Action } from "../../reducers/TodoReducer";
import TodoEdit from "./TodoEdit";
import { serverTimestamp } from "../../firebase/firebase.config";
import moment from "moment";
// import Modal from 'react-modal'
import useModal from '../../hooks/useModal'

const TodoItem = (props) => {
  const { todos, dispatch, editModal, setEditModal } = useContext(TodoListContext);
  const {isShowing, toggle} = useModal()


  useEffect(() => {
    console.log("TodoItem rendered");
    return () => {
      console.log("TodoItem Unmount");
    };
  }, []);

  const deleteTodo = (id) => {
    console.log(id);
    dispatch({
      type: Action.REMOVE_TODO,
      id: id,
    });
  };

  const toggleTodo = (id) => {
    dispatch({
      type: Action.STATUS_TODO,
      id: id,
      timestamp: serverTimestamp,
    });
  };
  const handleDate = props.createdAt.toDate();
  const date = moment(handleDate).format("dddd, MMMM Do YYYY, h:mm:ss a")

  return (
    <div>
    <div className="container m-0 p-3 bg-light">
      <div className="row p-1 m-0">
      <div className="col-7">{date}</div><div className="col-5 text-right">add note +</div></div>
      <div className ="p-3">
        <h3>{props.name}</h3>
      </div>
      <div className="row m-3">
        <p>{props.description}</p>
      </div>
      {props.notes ? <div className="m-3 p-3 bg-white">{props.notes}</div> : null} 
      <div className="container">
        
      {props.status ? (
        <div className="row p-2">
          <Button className="col-4 m-0" onClick={() => toggleTodo(props.id)} variant="success" block>
            Done
          </Button>
          <Button className ="col-4 m-0" onClick={() => toggle()} variant="primary" block>
            Edit
          </Button>
          <Button className="col-4 m-0" onClick={() => deleteTodo(props.id)} variant="danger" block>
          Delete
          </Button>
          </div>
      ) : (
        <div>
        <Button onClick={() => toggleTodo(props.id)} variant="warning" block>
          Undone
        </Button>
        <Button onClick={() => deleteTodo(props.id)} variant="danger" block>
        Delete
      </Button>
      </div>
      )}
    </div>
    <Modal show={isShowing} onHide={() => toggle()}><TodoEdit  {...props} /></Modal>
    </div>
    </div>
  );
};

export default TodoItem;
