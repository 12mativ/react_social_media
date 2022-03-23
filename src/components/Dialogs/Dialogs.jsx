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
    let DialogsData = [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Fedor'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Oleg'},
    ]

    let MessagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda ducimus explicabo illum, modi repellat.'},
        {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'},
        {id: 4, message: 'Oleg'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <div className={classes.dialog}>
                    <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                </div>
                <div className={classes.dialog}>
                    <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                </div>
                <div className={classes.dialog}>
                    <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>{MessagesData[0].message}</div>
                <div className={classes.message}>{MessagesData[1].message}</div>
                <div className={classes.message}>{MessagesData[2].message}</div>
            </div>
        </div>
    );
}

export default Dialogs;