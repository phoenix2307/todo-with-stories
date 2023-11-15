import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import {Task} from "../components/Task";
import {action} from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
  title: 'TodoLists/TaskOld',
  component: Task,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  args: {
    changeTaskStatus: action('Task Status changed'),
    changeTaskTitle: action('Task title changed'),
    removeTask: action('Remove Task'),
    task: {id: 'idTsk_13wsdewfijde343', title: 'JS', isDone: true},
    todolistId: 'idTL_wewe'
  },
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TaskIsNotDoneStory: Story = {
  args: {
    task: {id: 'idTsk_12wsdewjdei2343', title: 'CSS', isDone: false},
  }
};
export const TaskIsDoneStory: Story = {};
