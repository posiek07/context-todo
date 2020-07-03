import React, { useContext } from "react";
import { TodoListContext } from '../../contexts/todo-context'
import { Action } from '../../reducers/TodoReducer'
import useModal from '../../hooks/useModal'


  const TodoEdit = (props) => {
    const { todos, dispatch, editModal, setEditModal } = useContext(TodoListContext);
    
  const toggleTodo = (id) => {
    dispatch({
      type: Action.EDIT_TODO,
      id: id
    });
  };
  console.log(props)
  return (
    <div>
     {props.name}
    </div>
  );
}

export default TodoEdit
