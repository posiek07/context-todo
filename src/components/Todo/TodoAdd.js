import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../Modal/Modal";
import TodoForm from "./TodoForm";
import { TodoListContext } from "../../contexts/todo-context";
// import Modal from 'react-modal'

function TodoAdd() {
  const { modal, setModal } = useContext(TodoListContext);

  const customButton = (
    <div className="row justify-content-center py-2">
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Button
        variant="flat"
        onClick={() => {
          setModal(true);
        }}
      >
        Add Task
      </Button>
    </div>
  );

  return (
    <div className="container text-center">
      <h2 className="row-cols-8 py-3">Let's do something!</h2>
      {customButton}

      <Modal show={modal} onHide={() => setModal(false)}>
        <TodoForm />
      </Modal>
      <hr class="w-100 mx-auto mt-4 mb-5 border-danger"></hr>
    </div>
  );
}

export default TodoAdd;
