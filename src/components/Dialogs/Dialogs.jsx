import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Ivan
                </div>
                <div className={classes.dialog}>
                    Fedor
                </div>
                <div className={classes.dialog}>
                    Peter
                </div>
                <div className={classes.dialog}>
                    Oleg
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda ducimus explicabo illum, modi repellat.</div>
                <div className={classes.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.</div>
            </div>
        </div>
    );
}

export default Dialogs;