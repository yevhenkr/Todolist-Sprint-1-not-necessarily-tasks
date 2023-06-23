import React, {useState} from 'react'
import './App.css'
import {NewComponent} from "./NewComponent";

export type  FilterType = "ALL"|"RUBLS"|"Dollars"

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterType>('ALL');

    let currentMany = money
    if(filter === 'RUBLS'){
        currentMany = money.filter((f) => f.banknots === filter)
    }
    if(filter === 'Dollars'){
        currentMany = money.filter((f) => f.banknots === filter)
    }
    if(filter === 'ALL'){
        currentMany = money.filter((f) => true)
    }
    function clickButtonHandler(nameButton:FilterType) {
        setFilter(nameButton);
    }

    return (
        <NewComponent currentMany={currentMany} clickButtonHandler={clickButtonHandler}/>
    )
}

export default App