import { db } from './firebase.config'

const collection = 'collection'

console.log(db)

export const addTaskRequest = async (todo) => {
    return await db.collection(collection)
        .doc(todo.id).set({
            title: todo.title,
            createdAt: todo.createdAt,
            status: todo.status,
            id: todo.id
        })
}

export const getTasksRequest = async () => {
    return await db.collection(collection).get().then(res => {
        console.log(res)
        let todos = [];
res.docs.map(todo => {
            let data = todo.data();
todos.push({
                id: data.id,
                status: data.status,
                title: data.title,
                createdAt: data.createdAt
            })
        })
        return todos;
    })
}

export const changeStatusRequest = async (id, todo) => {
    return db.collection(collection)
        .doc(id)
        .set(todo)
}

export const removeTaskRequest = async (id) => {
    
    return db.collection(collection)
            .doc(id)
            .delete()
            .then(() => console.log('document deleted successfully'))
            .catch(function(error){
                console.error('Error removing document: ', error)
            })
}