import React from 'react'
import {Provider} from "react-redux";
import {AppRootStateType} from "./store";
import {combineReducers, legacy_createStore} from "redux";
import {tasksReducer} from './tasks-reducer';
import {todolistsReducer} from "./todolists-reducer";
import {v1} from "uuid";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

/*const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
};*/

const initialGlobalState = {
    todolists: [
        {id: 'todolistId1', title: "What to learn", filter: "all", addedDate: '', order: 0},
        {id: 'todolistId2', title: "What to buy", filter: "all", addedDate: '', order: 0}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {
                description: '', title: "HTML&CSS", status: 2,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: "todolistId1", order: 0, addedDate: ''
            },
            {
                description: '', title: "JS", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: "todolistId1", order: 0, addedDate: ''
            }
        ],
        ["todolistId2"]: [
            {
                description: '', title: "Milk", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: "todolistId2", order: 0, addedDate: ''
            },
            {
                description: '', title: "Book", status: 2,
                priority: 0, startDate: '', deadline: '',
                id: v1(), todoListId: "todolistId2", order: 0, addedDate: ''
            }
        ]
    }
};

export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState as AppRootStateType);


export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
