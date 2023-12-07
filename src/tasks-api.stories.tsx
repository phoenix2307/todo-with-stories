import React, {useEffect, useState} from 'react'
import {taskAPI} from "./api/tasksAPI";

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


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todoListId, setTodoListId] = useState<any>('')

    const getTasksForTodolist = () => {
        taskAPI.getTasks(todoListId)
            .then((res) => {
                setState(res.data)
            })
    }

/*    useEffect(() => {
        const todoListID = '73a5fea1-106c-4759-8087-7fac4636a728'
        taskAPI.getTasks(todoListID)
            .then((res) => {
                setState(res.data)
            })
    }, [])*/


    return (
        <div>
            {JSON.stringify(state)}
            <br/>
            <input placeholder={'todoListId'} value={todoListId} onChange={(e)=>{setTodoListId(e.currentTarget.value)}}/>
            <button onClick={getTasksForTodolist}>get tasks</button>
        </div>
    )
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todoListId, setTodoListId] = useState<any>('')
    const [title, setTitle] = useState<any>('')

    const createTask = () => {
        taskAPI.postTask(todoListId, title)
            .then((res) => {
                setState(res.data)
            })
    }

    /*    useEffect(() => {
            const todolistId = '73a5fea1-106c-4759-8087-7fac4636a728'
            taskAPI.postTask(todolistId, 'Yo')
                .then((res) => {
                    setState(res.data)
                })
        }, [])*/

    return (
        <div>
            {JSON.stringify(state)}
            <br/>
            <input placeholder={'TodoListID'} onChange={(e) => {
                setTodoListId(e.currentTarget.value)
            }} value={todoListId}/>
            <input placeholder={'title'} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }} value={title}/>
            <button onClick={createTask}>create task</button>
        </div>
    )
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')
    const [taskId, setTaskId] = useState<any>('')
    const [title, setTitle] = useState('')

    const updateTaskModel = {
        title: title,
        description: 'description',
        status: 2,
        priority: 1,
        startDate: 'startDate',
        deadline: 'deadline'
    }
    const updateTask = () => {
        taskAPI.putTask(todolistId, taskId, updateTaskModel)
            .then((res) => {
                setState(res.data)
            })
    }

    /*    useEffect(() => {
            const todolistId = '73a5fea1-106c-4759-8087-7fac4636a728'
            const taskId = '34bb2cf1-677e-43dc-ad2c-5b4177a70372'
            taskAPI.putTask(todolistId, taskId, updateTaskModel)
                .then((res) => {
                    setState(res.data)
                })
        }, [])*/

    return (
        <div>
            {JSON.stringify(state)}
            <br/>
            <input placeholder={'TodoListID'} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }} value={todolistId}/>
            <input placeholder={'TaskID'} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }} value={taskId}/>
            <input placeholder={'title'} onChange={(e) => {
                setTitle(e.currentTarget.value)
            }} value={title}/>
            <button onClick={updateTask}>update task</button>
        </div>
    )
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>('')
    const [taskId, setTaskId] = useState<any>('')

    const deleteTask = () => {
        taskAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    // useEffect(() => {
    //     const todolistId = '73a5fea1-106c-4759-8087-7fac4636a728'
    //     const taskId = '901cb108-0572-4e55-90d0-c9271b4c9920'
    //     taskAPI.deleteTask(todolistId, taskId)
    //         .then((res) => {
    //             setState(res.data)
    //         })
    // }, [])

    return (
        <div>
            {JSON.stringify(state)}
            <br/>
            <input placeholder={'TodoListID'} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }} value={todolistId}/>
            <input placeholder={'TaskID'} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }} value={taskId}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    )
}
