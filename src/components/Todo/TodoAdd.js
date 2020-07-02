import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import MyModal from '../Modal/Modal'
import TodoForm from './TodoForm'


function TodoAdd() {

    const [modalStatus, setModalStatus] = useState(false)




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

  <Button variant='flat' onClick={() => {setModalStatus(true)}}>Add Task</Button>
  </div>
    )


    return (
        <div className="container text-center">

            <h2 className="row-cols-8 py-3">Let's do something!</h2>
            {customButton}
    
            <MyModal show={modalStatus} onHide={() => setModalStatus(false)}><TodoForm/></MyModal>
            <hr class="w-100 mx-auto mt-4 mb-5 border-danger"></hr>
        </div>
    )
}

export default TodoAdd
