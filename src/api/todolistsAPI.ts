import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "bb48aa7f-70bd-4234-ba50-496c58e3a23c"
    }
}

export const todolistsAPI = {
    getTodolist() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
    postTodolist(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)
    },
    putTodolist(id: string, title: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: title}, settings)
    },
    deleteTodolist(id: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
    }
}