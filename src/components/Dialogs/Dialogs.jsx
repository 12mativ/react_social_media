import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_elems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;