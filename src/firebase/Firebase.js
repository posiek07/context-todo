import { db } from "./firebase.config";

const collection = "collection";

export const addTaskRequest = async (todo) => {
  return await db.collection(collection).doc(todo.id).set({
    title: todo.title,
    start: todo.start,
    end: todo.end,
    description: todo.description,
    notes: todo.notes,
    createdAt: todo.createdAt,
    status: todo.status,
    id: todo.id,
  });
};

export const getTasksRequest = async () => {
  return await db
    .collection(collection)
    .get()
    .then((res) => {
      let todos = [];
      res.docs.map((todo) => {
        let data = todo.data();
        todos.push({
          id: data.id,
          status: data.status,
          title: data.title,
          start: new Date(data.start.seconds*1000),
          end: new Date(data.end.seconds*1000),
          description: data.description,
          notes: data.notes,
          createdAt: data.createdAt,
        });
        return todo;
      });
      return todos;
    });
};

export const changeStatusRequest = async (todo) => {
  return db.collection(collection).doc(todo.id).set(todo);
};

export const removeTaskRequest = async (id) => {
  return db
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => console.log("document deleted successfully"))
    .catch(function (error) {
      console.error("Error removing document: ", error);
    });
};

export const editTaskRequest = async (todo) => {
  return await db.collection(collection).doc(todo.id).update(todo);
};
