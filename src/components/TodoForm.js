import React, {useContext, useState} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { TodoListContext } from '../context/context-store'

const TodoForm = () => {


    const [title, setTitle] = useState('')
    const { addTodo } = useContext(TodoListContext)

    const handleAddTodo = (event) => {
        event.preventDefault()
        addTodo(title)
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
      <Button onClick={handleAddTodo} variant="outline-secondary">ADD!</Button>
    </InputGroup.Append>
  </InputGroup></div>
    )
}

export default TodoForm