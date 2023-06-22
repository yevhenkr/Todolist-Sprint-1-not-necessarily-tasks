import React from 'react';
import './App.css';

// const MyFirstSubcsribe =()=>{
//     console.log("Im VASYA")
// }
//
// const MySecondSubcsribe =()=>{
//     console.log("Im EUGEN")
// }
// const onClickHandler=(name:string)=>{
//     console.log(name)
// }

const foo1=()=>{
    //ничего не пердавать
}
const foo2=(n:number)=> {
    console.log(n)
}
function App() {
    return (
        <div>
            {/*<button onClick={() => onClickHandler("VASYA")}>MyFirstSubscriber-1</button>*/}
            {/*<button onClick={() => onClickHandler("EUGEN")}>MyFirstSubscriber-2</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={()=>(foo2(100200))}>2</button>
        </div>
    );
}

export default App;