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

type OtherResponseType<D ={}> = {
    data: D,
    resultCode: number
    messages: string[]
}

export const taskAPI = {
    getTasks(todolistId: string) {
        return instance.get<GetResponseType>(`${todolistId}/tasks`)
    },
    postTask(todolistId: string, title: string) {
        return instance.post<OtherResponseType>(`${todolistId}/tasks`,{title})
    },
    putTask(todolistId: string, taskId: string, title: string) {
        return instance.put<OtherResponseType>(`${todolistId}/tasks/${taskId}`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return axios.delete<OtherResponseType>(`${todolistId}/tasks/${taskId}`)
    }
}