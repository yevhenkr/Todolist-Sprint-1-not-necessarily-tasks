import React from 'react';
import './App.css';
import {Cars} from "./Cars";

export type DataType = {
    title: string
    tasks: Array<TasksPropsType>
    students: Array<String>
}

type TasksPropsType = {
    taskId: number
    title: string
    isDone: boolean
}

export type CarsArreyType = {
    cars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {
    return (
        <div>
            <Cars cars={topCars}/>
        </div>
    );
}

export default App;