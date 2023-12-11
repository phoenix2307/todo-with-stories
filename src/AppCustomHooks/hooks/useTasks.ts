import {useState} from "react";
import {todolistId1, todolistId2} from "../id-utils";
import {v1} from "uuid";
import {TasksStateType} from "../AppCustomHooks";
import {TaskStatuses} from "../../api/tasksAPI";

export function useTasks() {
    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {
                description: '', title: "HTML&CSS", status: 2,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: todolistId1, order: 0, addedDate: ''
            },
            {
                description: '', title: "JS", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: todolistId1, order: 0, addedDate: ''
            }
        ],
        [todolistId2]: [
            {
                description: '', title: "Milk", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: todolistId2, order: 0, addedDate: ''
            },
            {
                description: '', title: "Book", status: 2,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: todolistId2, order: 0, addedDate: ''
            }
        ]
    })


    function removeTask(id: string, todolistId: string) {
        let todolistTasks = tasks[todolistId];
        tasks[todolistId] = todolistTasks.filter(t => t.id != id);
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId: string) {
        let task = {description: '', title: title, status: 0,
            priority: 0, startDate: '', deadline: '',
            id: v1(), todoListId: todolistId1, order: 0, addedDate: ''};
        let todolistTasks = tasks[todolistId];
        tasks[todolistId] = [task, ...todolistTasks];
        setTasks({...tasks});
    }

    function changeStatus(id: string, status: TaskStatuses, todolistId: string) {
        let todolistTasks = tasks[todolistId];
        let task = todolistTasks.find(t => t.id === id);
        if (task) {
            task.status = status;
            setTasks({...tasks});
        }
    }

    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        let todolistTasks = tasks[todolistId];
        let task = todolistTasks.find(t => t.id === id);
        if (task) {
            task.title = newTitle;
            setTasks({...tasks});
        }
    }

    function removeTaskForTodolist(id: string) {
        delete tasks[id];
        setTasks({...tasks});
    }

    function addTaskForNewTodolist(newTodolistId: string) {
        setTasks({
            ...tasks,
            [newTodolistId]: []
        })
    }

    return {
        tasks,
        removeTask,
        addTask,
        changeStatus,
        changeTaskTitle,
        removeTaskForTodolist,
        addTaskForNewTodolist
    }
}