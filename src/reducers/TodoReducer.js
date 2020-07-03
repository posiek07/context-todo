import {
  addTaskRequest,
  removeTaskRequest,
  changeStatusRequest,
  editTaskRequest,
} from "../firebase/Firebase";
import { serverTimestamp } from "../firebase/firebase.config";

export const Action = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  STATUS_TODO: "status-todo",
  GET_ALL_TODOS: "get-all-todos",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case Action.GET_ALL_TODOS: {
      return action.res;
    }
    case Action.ADD_TODO: {
      addTaskRequest(action.todo);
      return [...state, action.todo];
    }
    case Action.REMOVE_TODO: {
      console.log(action);
      removeTaskRequest(action.id);
      return state.filter((todo) => todo.id !== action.id);
    }
    case Action.EDIT_TODO: {
      const foundIndex = state.findIndex((todo) => todo.id === action.id);
      let newArr = [...state];
      newArr[foundIndex] = {
        ...newArr[foundIndex],
        status: !newArr[foundIndex].status,
        createdAt: action.timestamp,
        description: newArr[foundIndex].description,
        title: newArr[foundIndex].title,
        notes: newArr[foundIndex].notes
      };
      changeStatusRequest(newArr[foundIndex]);
      return newArr;
    }
    case Action.STATUS_TODO: {
      const foundIndex = state.findIndex((todo) => todo.id === action.id);
      let newArr = [...state];
      newArr[foundIndex] = {
        ...newArr[foundIndex],
        status: !newArr[foundIndex].status,
        createdAt: action.timestamp,
      };
      console.log(newArr);
      editTaskRequest(newArr[foundIndex]);
      return newArr;
    }
    default:
      return state;
  }
};
