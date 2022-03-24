import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}
                     className={(navData) => navData.isActive ? classes.active : ''}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt=""/>
                <span className={classes.dialog_name}>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;