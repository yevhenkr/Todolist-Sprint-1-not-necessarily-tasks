export type ButtonPropsType = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonPropsType) => {
    const ClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={ClickButtonHandler}>{props.name}</button>
    );
}