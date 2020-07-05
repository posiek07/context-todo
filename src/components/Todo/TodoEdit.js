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
  console.log(props.start)

  const handleEditTodo = (event) => {
    event.preventDefault();
    dispatch({
      type: Action.EDIT_TODO,
      todo: {
        title: title,
        description: description,
        start: props.start,
        end: props.end,
        id: props.id,
        status: props.status,
        createdAt: serverTimestamp,
        notes: {
          note: note,
          id: uuid(),
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

  const changeDate = date => setDatePicker(date)


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
            type="textarea"
            placeholder="Description"
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            onChange={handleNote}
            defaultValue={props.notes.note ? props.notes.note : null}
            type="textarea"
            placeholder="Description"
          />
        </Form.Group>
        
        Change? <br></br>
        <DateRangePicker
          onChange={changeDate}
          value={datePicker}
        />
        <Button onClick={handleEditTodo} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TodoEdit;
