import React, { useState } from "react";

const TodoAddNote = (props) => {
  const [note, setNote] = useState("");

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
      <form onSubmit={submitNote}>
        <input defaultValue={props.value} onChange={handleNote} />
      </form>
    </div>
  );
};

export default TodoAddNote;
