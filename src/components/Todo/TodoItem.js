import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../Modal/Modal";
import { TodoListContext } from "../../contexts/todo-context";
import { Action } from "../../reducers/TodoReducer";
import TodoEdit from "./TodoEdit";
import { serverTimestamp } from "../../firebase/firebase.config";
import moment from "moment";
import useModal from "../../hooks/useModal";
import TodoAddNote from "./TodoAddNote";
import { v1 as uuid } from "uuid";

const TodoItem = (props) => {
  const { dispatch } = useContext(TodoListContext);
  const { isShowing, toggle } = useModal();
  const [isAddNote, setAddNote] = useState(false);

  useEffect(() => {

  }, []);

  const deleteTodo = (id) => {
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

  const addTodoNote = (id, note) => {
    const noteId = props.notes.id ? props.notes.id : uuid()
    dispatch({
      type: Action.ADD_TODO_NOTE,
      id: id,
      notes: {
        note: note,
        id: noteId,
      },
      timestamp: serverTimestamp,
    });
  };

  const handleDate = props.createdAt.toDate();
  const date = moment(handleDate).format("dddd, MMMM Do YYYY, h:mm a");

  const todoAdd = isAddNote ? (
    <TodoAddNote
      value={props.notes.note}
      todoId={props.id}
      setOff={() => setAddNote(false)}
      dispatchNote={(note) => {
        addTodoNote(props.id, note);
      }}
    />
  ) : (
    <p onClick={() => setAddNote(true)}>add note +</p>
  );

  return (
    <div className="h6 small">
      <div className="container m-0 p-1 bg-light">
        <div className="row p-1 m-0">
          <div className="col-7 h6 small">{date}</div>
          <div className="col-5 h4 small text-right">{todoAdd}</div>
        </div>
        <div className="p-3">
          <h5>{props.title}</h5>
        </div>
        <div className="row flex-auto m-3 h6 small">
          <p style={{wordWrap: "break-word"}}>{props.description}</p>
        </div>
        {props.notes.note ? (
          <div>
            Notes: <br></br>
            <div className="m-3 p-3 bg-white">{props.notes.note}</div>
          </div>
        ) : null}
        <div className="container">
          {props.status ? (
            <div className="row p-2">
              <Button
                className="col-4 m-0 "
                onClick={() => toggleTodo(props.id)}
                variant="success"
                block
              >
                Done
              </Button>
              <Button
                className="col-4 m-0"
                onClick={() => toggle(true)}
                variant="primary"
                block
              >
                Edit
              </Button>
              <Button
                className="col-4 m-0"
                onClick={() => deleteTodo(props.id)}
                variant="danger"
                block
              >
                Delete
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => toggleTodo(props.id)}
                variant="warning"
                block
              >
                Undone
              </Button>
              <Button
                onClick={() => deleteTodo(props.id)}
                variant="danger"
                block
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <Modal show={isShowing} onHide={() => toggle()}>
          <TodoEdit show={isShowing} onHide={() => toggle()} {...props} />
        </Modal>
      </div>
    </div>
  );
};

export default TodoItem;
