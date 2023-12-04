import React, {useEffect, useState} from 'react'
import {taskAPI} from "./api/tasksAPI";

export default {
    title: 'API',
    tags: ['autodocs'],
}
const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "8d201fb1-33ed-4ec9-a013-6de2e03bc35f"
    }
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListID = '73a5fea1-106c-4759-8087-7fac4636a728'
        taskAPI.getTasks(todoListID)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}


export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '73a5fea1-106c-4759-8087-7fac4636a728'
        taskAPI.postTask(todolistId, 'Yo')
            .then((res) => {
                // debugger
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
// export const UpdateTask = () => {
//     const [state, setState] = useState<any>(null)
//     useEffect(() => {
//         const todolistId = '5786e8ea-f46c-47b0-be9d-57d3bc187bb9'
//         todolistsAPI.putTodolist(todolistId, 'Some 4')
//             .then((res) => {
//                 // debugger
//                 setState(res.data)
//             })
//     }, [])
//
//     return <div>{JSON.stringify(state)}</div>
// }

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '73a5fea1-106c-4759-8087-7fac4636a728'
        const taskId = '44269acc-2acf-4665-b94a-1105619f167e'
        taskAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
