import {Meta, StoryObj} from "@storybook/react";
import {Task} from "./Task";
import {action} from "@storybook/addon-actions";
import {useState} from "react";
import {TaskStatuses} from "../api/tasksAPI";

const meta: Meta<typeof Task> = {
    title: 'Todo/Task',
    component: Task,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        task: {description: '', title: 'Active', status: 0,
            priority: 0, startDate: '', deadline: '',
            id: 'task1', todoListId: 'toDo1', order: 0, addedDate: ''},
        todolistId: 'toDo1',
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask')
    }
};

export default meta;

type Story = StoryObj<typeof Task>;

export const ActiveTaskStory: Story = {}
export const CompletedTaskStory: Story = {
    args: {
        task: {description: '', title: 'Completed', status: 2,
            priority: 0, startDate: '', deadline: '',
            id: 'task1', todoListId: 'toDo1', order: 0, addedDate: ''},
    }
}

const TaskLiveStoryHandler = () => {
    const [task, setTask] = useState(
        {description: '', title: 'Task Title', status: 2,
            priority: 0, startDate: '', deadline: '',
            id: 'task1', todoListId: 'toDo1', order: 0, addedDate: ''})

/*    const changeTaskStatusHandler = () => {
        return {...task, isDone: !task.isDone}
    }
    const changeTaskTitleHandler = () => {
        return {...task}
    }
    const removeTaskHandler = () => {
        action('task removed');
        // setTask({...task, title: 'Task removed'});
    }*/

    return <Task
        changeTaskStatus={(id, status:TaskStatuses, todolistId) => setTask({...task, status: status})}
        changeTaskTitle={(taskId, newTitle) => setTask({...task, title: newTitle})}
        removeTask={action('task removed')}
        task={task}
        todolistId={'toDo1'}/>
}

export const TaskLiveStory = {
    render: () => <TaskLiveStoryHandler/>
}