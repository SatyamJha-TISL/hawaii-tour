
import React from 'react';
import styles from "./Button.module.scss";


interface Props {
    title: string
    type: string
}

const Button = (props: Props) => {
    return (
        <div className={props.type === "primary" ? styles.primary : styles.secondary} >{props.title}</div>
    )
}

export default Button