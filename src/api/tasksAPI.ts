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

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    High = 2,
    Urgently = 3,
    Later = 4
}

export type UpdateTaskType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}

type OtherResponseType<D = {}> = {
    data: D,
    resultCode: number
    messages: string[]
}

export const taskAPI = {
    getTasks(todolistId: string) {
        return instance.get<GetResponseType>(`${todolistId}/tasks`)
    },
    postTask(todolistId: string, title: string) {
        return instance.post<OtherResponseType<{ item: TaskType }>>(`${todolistId}/tasks`, {title})
    },
    putTask(todolistId: string, taskId: string, updateModel: UpdateTaskType) {
        return instance.put<OtherResponseType<{ item: TaskType }>>(`${todolistId}/tasks/${taskId}`, {title: updateModel.title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<OtherResponseType>(`${todolistId}/tasks/${taskId}`)
    }
}