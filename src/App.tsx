import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed' | 'firstThree' | 'hideAll';

function App() {

    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ]);
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      setTasks={setTasks}
            />
        </div>
    );
}

export default App;