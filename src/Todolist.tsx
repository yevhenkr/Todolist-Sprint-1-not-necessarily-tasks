import React, {useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    setTasks: (tasks: TaskType[]) => void
}

export function Todolist(props: PropsType) {
    let tasksForTodolist = props.tasks;

    function removeTask(id: number) {
        let filteredTasks = props.tasks.filter(t => t.id != id);
        props.setTasks(filteredTasks);
    }

    let [filter, setFilter] = useState<FilterValuesType>('all');

    if (filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    if (filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === 'firstThree') {
        tasksForTodolist = props.tasks.slice(0, 3);
    }
    if (filter === 'hideAll') {
        tasksForTodolist = props.tasks.filter(t => false);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <div>
            <button onClick={() => {
                changeFilter('hideAll')
            }}>
                Delete all tasks
            </button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                changeFilter('all')
            }}>
                All
            </button>
            <button onClick={() => {
                changeFilter('active')
            }}>
                Active
            </button>
            <button onClick={() => {
                changeFilter('completed')
            }}>
                Completed
            </button>
            <button onClick={() => {
                changeFilter('firstThree')
            }}>
                First three
            </button>
        </div>
    </div>
}