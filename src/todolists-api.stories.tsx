import React, {useEffect, useState} from 'react'
import axios from "axios";

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
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'Alex'}, settings)
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
        const todolistId = '01b05662-9e4c-43ae-9064-0005d08e9563'
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '5786e8ea-f46c-47b0-be9d-57d3bc187bb9'
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'Some'}, settings)
            .then((res) => {
                // debugger
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}