import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import {log} from 'util';
import {Input} from './components/Input';
import {Button} from './components/Button';


function App() {
    let [message, setMessage] = useState([ //представим что прихордит с сервераЮЮ
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')

    const addMessage = () => {
        setMessage([{message: title}, ...message])
    }

    const callBackButtonHandler = () => {
        setTitle('')
        addMessage()
    }

    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            {/*<input/>*/}
            {/*<button>+</button>*/}
            {/*<button onClick={addMessage}>Добавить сообщение</button>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
