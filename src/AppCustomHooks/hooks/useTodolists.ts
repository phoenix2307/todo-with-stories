import {useState} from "react";
import {todolistId1, todolistId2} from "../id-utils";
import {FilterValuesType, TodolistType} from "../AppCustomHooks";
import {v1} from "uuid";

export function useTodoLists(
                             onTodolistRemoved: (id: string) => void,
                             onCreateNewTodolist: (id: string) => void) {
    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    function changeTodolistTitle(id: string, title: string) {
        const todolist = todolists.find(tl => tl.id === id);
        if (todolist) {
            todolist.title = title;
            setTodolists([...todolists]);
        }
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    function removeTodolist(id: string) {
        setTodolists(todolists.filter(tl => tl.id != id));
        onTodolistRemoved(id)
    }

    function addTodolist(title: string) {
        let newTodolistId = v1();
        let newTodolist: TodolistType = {id: newTodolistId, title: title, filter: 'all'};
        setTodolists([newTodolist, ...todolists]);
        onCreateNewTodolist(newTodolistId)

    }


    return {
        todolists,
        changeFilter,
        changeTodolistTitle,
        removeTodolist,
        addTodolist
    }
}