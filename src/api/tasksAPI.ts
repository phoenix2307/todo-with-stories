import axios from "axios";

// const settings = {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "8d201fb1-33ed-4ec9-a013-6de2e03bc35f"
//     }
// }

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        "API-KEY": "8d201fb1-33ed-4ec9-a013-6de2e03bc35f"
    }
})

type GetResponseType = {
    items: TaskType[]
    totalCount: number
    error: string
}

export const taskAPI = {
    getTasks(todolistId: string) {
        return instance.get<GetResponseType>(`${todolistId}/tasks`)
    },
   /* postTask(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: title}, settings)
    },
    putTask(id: string, title: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title: title}, settings)
    },
    deleteTask(id: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
    }*/
}