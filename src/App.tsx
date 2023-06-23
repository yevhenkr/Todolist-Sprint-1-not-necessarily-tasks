import React, {useState} from 'react'
import './App.css'

function App() {
    let [a, setA] = useState(1)

    const onClickHandler=()=>{
        setA(++a);
        console.log(a)
    }
    const onClickZeroigHandler=()=>{
        setA(0);
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickZeroigHandler}>0</button>
        </div>
    );
}

export default App