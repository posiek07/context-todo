import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TodoListContext } from "../../contexts/todo-context";
import { Action } from "../../reducers/TodoReducer";
import { v1 as uuid } from "uuid";
import { serverTimestamp } from "../../firebase/firebase.config";
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

const TodoForm = () => {
  const { dispatch, setModal } = useContext(TodoListContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datePicker, setDatePicker] = useState([new Date(), new Date()])
  const handleAddTodo = (event) => {
    event.preventDefault();

    dispatch({
      type: Action.ADD_TODO,
      todo: {
        title: title,
        start: datePicker[0],
        end: datePicker[1],
        description: description,
        id: uuid(),
        status: true,
        createdAt: serverTimestamp,
        notes: {
          note: null,
        },
      },
    });

    setTitle("");
    setDescription("");
    setModal(false);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescrpition = (event) => {
    setDescription(event.target.value);
  };

  const changeDate = date => setDatePicker(date)

  return (
    <div>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={title}
            type="text"
            placeholder="Enter title"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleDescrpition}
            value={description}
            as="textarea"
            placeholder="Description"
            rows="4"
          />
        </Form.Group>
        When? <br></br>
        <DateRangePicker
          onChange={changeDate}
          value={datePicker}
        />
        <Button onClick={handleAddTodo} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
