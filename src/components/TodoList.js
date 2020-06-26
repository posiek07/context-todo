import React, {useContext} from 'react'
import {TodoListContext} from '../context/context-store'
import TodoItem from './TodoItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import  './TodoList.css'



const TodoList = () => {
    const { todos } = useContext(TodoListContext)
    return (
        <div>
            <div>
            <TransitionGroup className="todo-list">
                {todos.map(todo => todo.status ? <CSSTransition
              key={todo.id}
              timeout={500}
              classNames="fade"
            ><TodoItem 
                    key = {todo.id}
                    name={todo.title}
                    id={todo.id}
                    status={todo.status}
                    /></CSSTransition> : null 
                )}
                </TransitionGroup>
            </div>
            
            <br/>
            <br/>
            <br/>
            <h1>Done list:
                <br/>
            </h1>
            <div>
            <TransitionGroup className="todo-list">
            {todos.map(todo => !todo.status ? 
             <CSSTransition
             key={todo.id}
             timeout={500}
             classNames="fade"
           ><TodoItem 
                    key = {todo.id}
                    name={todo.title}
                    id={todo.id}
                    status={todo.status}
                    /></CSSTransition> : null
                )}
                </TransitionGroup>
                <div>
            </div>
            </div>
        </div>
    )
}

export default TodoList
