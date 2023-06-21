import React from "react";
import {CarsArreyType} from './App'

export function Cars(props: CarsArreyType) {
    return (
        <table>
            {props.cars.map(car => {
                return <tr>
                    <th> {car.manufacturer}</th>
                    <th> {car.model}</th>
                </tr>
            })}
        </table>
    )
}