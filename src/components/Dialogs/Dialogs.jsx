import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={(navData) => navData.isActive ? classes.active : ''}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name='Ivan' id='1'/>
                <div className={classes.dialog}>
                    <DialogItem name='Fedor' id='2'/>
                </div>
                <div className={classes.dialog}>
                    <DialogItem name='Peter' id='3'/>
                </div>
                <div className={classes.dialog}>
                    <DialogItem name='Oleg' id='4'/>
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