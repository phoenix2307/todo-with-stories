import React, {useEffect, useState} from 'react'
import {todolistsAPI} from "./api/todolistsAPI";

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

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolist()
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.postTodolist('Someone')
            .then((res) => {
                // debugger
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f84a0f25-a695-4032-8fda-2deda18c4e85'
        todolistsAPI.putTodolist(todolistId, 'Some updated')
            .then((res) => {
                // debugger
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '6bb7370b-3b3c-4e98-862f-d9196242c664'
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
