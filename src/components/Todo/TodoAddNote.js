import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Form from "react-bootstrap/Form";

const TodoAddNote = (props) => {
  const [note, setNote] = useState(props.value);

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const submitNote = (event) => {
    event.preventDefault();
    props.dispatchNote(note);
    props.setOff(false);
  };

  return (
    <div>
    <Form onSubmit={submitNote}>
    <InputGroup className="mb-0">
    <FormControl defaultValue={props.value} onChange={handleNote} aria-describedby="basic-addon1" />
    <InputGroup.Prepend>
      <Button onClick={submitNote} variant="outline-secondary">+</Button>
    </InputGroup.Prepend>
  </InputGroup>
  </Form>
    </div>
  );
};

export default TodoAddNote;
