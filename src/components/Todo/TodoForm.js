import React, {useContext, useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { TodoListContext } from '../../contexts/todo-context'
import { Action } from '../../reducers/TodoReducer'
import {v1 as uuid} from 'uuid'
import { serverTimestamp } from '../../firebase/firebase.config'

const TodoForm = () => {

    const { dispatch } = useContext(TodoListContext)
    const [title, setTitle] = useState('')

    const handleAddTodo = (event) => {
      event.preventDefault()
      
      dispatch({
        type: Action.ADD_TODO,
        todo: {
          title: title,
          id: uuid(),
          status: true,
          createdAt: serverTimestamp,
        }
      })

      setTitle('')
  }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }



    return(  
    <div>
        <h2>Let's do something</h2>
    <InputGroup className="mb-3">
    <FormControl
    onChange={handleChange}
    value={title}
        type="text"
      placeholder="Add task"
      aria-label="Add task"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button onClick={handleAddTodo} variant="outline-secondary">+</Button>
    </InputGroup.Append>
  </InputGroup></div>
    )
}

export default TodoForm