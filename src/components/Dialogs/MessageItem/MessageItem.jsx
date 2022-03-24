import classes from './MessageItem.module.css';

const Message = (props) => {
    return (
        <div className={classes.dialog}>
            <p className={classes.message}>{props.message}</p>
        </div>
    )
}

export default Message;