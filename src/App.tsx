import React from 'react';
import './App.css';
import {Button} from "./component/Button";

const Button1Foo=(subsciber:string, age:number)=>{
    console.log(subsciber + " " + age)
}
const Button2Foo=(subsciber:string)=>{
    console.log(subsciber)
}
const Button3Foo=()=>{
    console.log("Stuped button")
}
function App() {
    return (
        <div>
            <Button name="MyYouTUbeChanel-1" callBack={()=>Button1Foo("Ivan", 21)}/>
            <Button name="MyYouTUbeChanel-2" callBack={()=>Button2Foo("Vasya" )}/>
            <Button name="StypedButton" callBack={Button3Foo}/>
        </div>
    );
}

export default App;