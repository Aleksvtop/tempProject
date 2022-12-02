import React from "react";

type InputButtonPropsType = {
    name: string
    callBack: () => void
}

export const InputButton = (props:InputButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}