import React from "react";
import {FilterType} from './App'
type  NewComoType={
    currentMany: Array<any>
    clickButtonHandler: (name: FilterType) => void;
}

export const NewComponent=(props:NewComoType)=> {
    return (
        <div>
            {props.currentMany.map((e, index) => {
                return (
                    <div key={index}>
                        <span>{e.banknots} </span>
                        <span>{e.value} </span>
                        <span>{e.number} </span>
                    </div>
                )
            })}
            <button onClick={()=>props.clickButtonHandler("ALL")}>ALL</button>
            <button onClick={()=>props.clickButtonHandler("RUBLS")}>RUBLE</button>
            <button onClick={()=>props.clickButtonHandler("Dollars")}>DOLLAR</button>
        </div>
    )
}