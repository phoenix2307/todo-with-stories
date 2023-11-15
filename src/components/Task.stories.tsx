import {Meta, StoryObj} from "@storybook/react";
import {Task} from "./Task";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

const meta: Meta<typeof Task> = {
    title: 'Todo/Task',
    component: Task,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        task: {id: 'task1', title: 'Active', isDone: false},
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
        task: {id: 'task1', title: 'Completed', isDone: true}
    }
}

const TaskLiveStoryHandler = () => {
    const [task, setTask] = useState({id: 'task1', title: 'Task Title', isDone: true})

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
        changeTaskStatus={(isDone) => setTask({...task, isDone: !task.isDone})}
        changeTaskTitle={(taskId, newTitle) => setTask({...task, title: newTitle})}
        removeTask={action('task removed')}
        task={task}
        todolistId={'toDo1'}/>
}

export const TaskLiveStory = {
    render: () => <TaskLiveStoryHandler/>
}