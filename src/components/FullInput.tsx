import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {log} from 'util';

type FullInputPropsType = {
    addMessage: (value: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}> Add</button>
        </div>
    );
}
