type ButtonProps={
    name: string
    callBack:()=>void
}

export const Button=(props:ButtonProps)=>{
    return(
        <button onClick={props.callBack}>{props.name}</button>
    )
}