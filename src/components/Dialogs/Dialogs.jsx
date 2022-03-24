import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => (<div className={classes.dialog}><DialogItem name={dialog.name} id={dialog.id}/></div>))
    let messagesElements = props.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;