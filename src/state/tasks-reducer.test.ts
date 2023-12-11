import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';
import {addTodolistAC, removeTodolistAC} from './todolists-reducer';
import {TaskStatuses} from "../api/tasksAPI";

let startState: TasksStateType = {};
beforeEach(() => {
/*    startState = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };*/
    startState = {
        "todolistId1": [
            // { id: "1", title: "CSS", isDone: false },
            {
                description: '', title: "CSS", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: "1", todoListId: "todolistId1", order: 0, addedDate: ''
            },
            // { id: "2", title: "JS", isDone: true },
            {
                description: '', title: "JS", status: 2,
                priority: 0, startDate: '', deadline: '',
                id: "2", todoListId: "todolistId1", order: 0, addedDate: ''
            },
            // { id: "3", title: "React", isDone: false },
            {
                description: '', title: "React", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: "3", todoListId: "todolistId1", order: 0, addedDate: ''
            }
        ],
        "todolistId2": [
            // { id: "1", title: "bread", isDone: false },
            {
                description: '', title: "bread", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: "1", todoListId: "todolistId2", order: 0, addedDate: ''
            },
            // { id: "2", title: "milk", isDone: true },
            {
                description: '', title: "milk", status: 2,
                priority: 0, startDate: '', deadline: '',
                id: "2", todoListId: "todolistId2", order: 0, addedDate: ''
            },

            // { id: "3", title: "tea", isDone: false },
            {
                description: '', title: "tea", status: 0,
                priority: 0, startDate: '', deadline: '',
                id: "3", todoListId: "todolistId2", order: 0, addedDate: ''
            }
        ]
    };
});

test('correct task should be deleted from correct array', () => {
    const action = removeTaskAC("2", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy();
});
test('correct task should be added to correct array', () => {
    const action = addTaskAC("juce", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(4);
    expect(endState["todolistId2"][0].id).toBeDefined();
    expect(endState["todolistId2"][0].title).toBe("juce");
    expect(endState["todolistId2"][0].status).toBe(TaskStatuses.New);
});
test('status of specified task should be changed', () => {
    const action = changeTaskStatusAC("2", TaskStatuses.New, "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"][1].status).toBe(TaskStatuses.Completed);
    expect(endState["todolistId2"][1].status).toBe(TaskStatuses.New);
});
test('title of specified task should be changed', () => {
    const action = changeTaskTitleAC("2", "yogurt", "todolistId2");

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"][1].title).toBe("JS");
    expect(endState["todolistId2"][1].title).toBe("yogurt");
    expect(endState["todolistId2"][0].title).toBe("bread");
});
test('new array should be added when new todolist is added', () => {
    const action = addTodolistAC("new todolist");

    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});
test('propertry with todolistId should be deleted', () => {
    const action = removeTodolistAC("todolistId2");

    const endState = tasksReducer(startState, action)

    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});
