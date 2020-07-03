import React, {useContext, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { TodoListContext } from '../../contexts/todo-context'
import { Action } from '../../reducers/TodoReducer'
import {v1 as uuid} from 'uuid'
import { serverTimestamp } from '../../firebase/firebase.config'

const TodoForm = () => {

    const { dispatch, setModal } = useContext(TodoListContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    const handleAddTodo = (event) => {
      event.preventDefault()
      
      dispatch({
        type: Action.ADD_TODO,
        todo: {
          title: title,
          description: description,
          id: uuid(),
          status: true,
          createdAt: serverTimestamp,
          notes: null,
        }
      })

      setTitle('')
      setDescription('')
      setModal(false)

  }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescrpition = (event) => {
      setDescription(event.target.value)
    }


    return(  
    <div>

<Form>
<Form.Group controlId="formTitle">
  <Form.Label>Title</Form.Label>
  <Form.Control  onChange={handleChange}
    value={title} type="text" placeholder="Enter title" />
  <Form.Text className="text-muted">
  </Form.Text>
</Form.Group>

<Form.Group controlId="formDescription">
  <Form.Label>Description</Form.Label>
  <Form.Control onChange={handleDescrpition}
    value={description} type="textarea" placeholder="Description" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button  onClick={handleAddTodo} variant="primary" type="submit">
  Submit
</Button>
</Form></div>
    )
}

export default TodoForm