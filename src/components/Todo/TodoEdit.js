import React, { useContext, useState } from "react";
import { TodoListContext } from "../../contexts/todo-context";
import { Action } from "../../reducers/TodoReducer";
import Form from "react-bootstrap/Form";
import { serverTimestamp } from "../../firebase/firebase.config";
import Button from "react-bootstrap/Button";
import { v1 as uuid } from "uuid";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

const TodoEdit = (props) => {
  const { dispatch } = useContext(TodoListContext);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [note, setNote] = useState(props.notes.note);
  const [datePicker, setDatePicker] = useState([props.start, props.end])

  const handleEditTodo = (event) => {
    const noteId = props.notes.id ? props.notes.id : uuid()

    event.preventDefault();
    dispatch({
      type: Action.EDIT_TODO,
      todo: {
        title: title,
        description: description,
        start: datePicker[0],
        end: datePicker[1],
        id: props.id,
        status: props.status,
        createdAt: serverTimestamp,
        notes: {
          note: note,
          id: noteId,
        },
      },
    });
    props.onHide();
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescrpition = (event) => {
    setDescription(event.target.value);
  };

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const changeDate = date => {
    setDatePicker(date)
  }


  return (
    <div>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            defaultValue={props.title}
            type="text"
            placeholder="Enter title"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleDescrpition}
            defaultValue={props.description}
            as="textarea"
            placeholder="Description"
            rows="4"
          />
        </Form.Group>

        <Form.Group controlId="formNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            onChange={handleNote}
            defaultValue={props.notes.note ? props.notes.note : null}
            as="textarea"
            placeholder="Notes"
            rows="2"
          />
        </Form.Group>
        <div className="container p-2 row justify-content-start">
        Change? <br></br>
        <div className="col-9"><DateRangePicker
          onChange={changeDate}
          value={datePicker}
        /></div>
        <div className="col-1 p-3">
        <Button onClick={handleEditTodo} variant="primary" type="submit">
          Submit
        </Button>
        </div>
        </div>
      </Form>
    </div>
  );
};

export default TodoEdit;
