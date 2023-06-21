import React from "react";
import {DataType} from "./App";


export function Tasks(props: DataType) {
    return (<>
            <div>{props.title} </div>
            <span>{props.students[1]}</span>
            <span>{props.tasks[0].title}</span>
            <input type={"checkbox"} checked={true}/>
            <ul>
                {props.students.map(el => {
                    return (
                        <li>{el}</li>
                    )
                })}
            </ul>
        </>
    )
}