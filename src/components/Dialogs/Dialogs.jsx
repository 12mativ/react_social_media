import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>)

    //watch for textarea updates
    let newMessageElement = React.createRef();

    //push message (in state.js)
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    //update current value of message text (in state.js)
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_elems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <div className={classes.message_field}>
                    <textarea placeholder='Start typing' ref={newMessageElement} onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;