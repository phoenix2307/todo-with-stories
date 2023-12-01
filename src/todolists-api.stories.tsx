import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistsAPI} from "./api/todolistsAPI";

export default {
    title: 'API',
    tags: ['autodocs'],
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "bb48aa7f-70bd-4234-ba50-496c58e3a23c"
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
        const todolistId = '5786e8ea-f46c-47b0-be9d-57d3bc187bb9'
        todolistsAPI.putTodolist(todolistId, 'Some 4')
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
        const todolistId = '5786e8ea-f46c-47b0-be9d-57d3bc187bb9'
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
