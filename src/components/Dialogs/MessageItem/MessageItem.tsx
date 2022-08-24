import classes from './MessageItem.module.css';
import React from "react";

type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={classes.dialog}>
            <p className={classes.message}>{message}</p>
        </div>
    )
}

export default Message;