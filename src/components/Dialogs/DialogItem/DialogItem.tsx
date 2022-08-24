import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemType> = ({id, name}) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + id}
                     className={(navData) => navData.isActive ? classes.active : ''}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt=""/>
                <span className={classes.dialog_name}>{name}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;