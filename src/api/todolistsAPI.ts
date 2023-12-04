import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "8d201fb1-33ed-4ec9-a013-6de2e03bc35f"
    }
}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<D> = {
    data: D,
    resultCode: number
    messages: string[]
}

export const todolistsAPI = {
    getTodolist() {
        return axios.get<TodolistType[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
    postTodolist(title: string) {
        return axios.post<ResponseType<{item: TodolistType}>>('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)
    },
    putTodolist(id: string, title: string) {
        return axios.put<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: title}, settings)
    },
    deleteTodolist(id: string) {
        return axios.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
    }
}