import React, {useEffect, useState} from 'react'
import {todolistsAPI} from "./api/todolistsAPI";

export default {
    title: 'API',
    tags: ['autodocs'],
}

/*const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "8d201fb1-33ed-4ec9-a013-6de2e03bc35f"
    }
}*/

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
    const [title, setTitle] = useState('')

    const createTodoList = () => {
        todolistsAPI.postTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }

/*    useEffect(() => {
        todolistsAPI.postTodolist('Someone')
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    return (
        <div>
            {JSON.stringify(state)}
            <br/>
            <input placeholder={'title'} value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <button onClick={createTodoList}>create TodoList</button>
        </div>
    )
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')
    const [title, setTitle] = useState('')

    const updateTodolist = () => {
        todolistsAPI.putTodolist(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }

    /*useEffect(() => {
        const todolistId = 'f84a0f25-a695-4032-8fda-2deda18c4e85'
        todolistsAPI.putTodolist(todolistId, 'AAAA some AAAA')
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    return (
        <div>
            {JSON.stringify(state)}
            <br/>
            <input placeholder={'todoListId'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'title'} value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <button onClick={updateTodolist}>update TodoList</button>
        </div>
    )
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')
    const deleteTodoList = () => {
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }

    /*useEffect(() => {
        const todolistId = '6270196e-6c92-40de-b0fb-c42c46eec0be'
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])*/

    return (
        <div>
            {JSON.stringify(state)}
            <br/>
            <input placeholder={'todoListId'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
            <button onClick={deleteTodoList}>delete TodoList</button>
        </div>
    )
}
