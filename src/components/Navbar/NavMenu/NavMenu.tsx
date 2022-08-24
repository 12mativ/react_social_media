import classes from './NavMenu.module.css';
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <ul className={classes.nav_menu}>
            <li className={classes.nav_link}><NavLink to="/profile" className={(navData) => navData.isActive ? classes.active : ''}>Profile</NavLink>
            </li>
            <li className={classes.nav_link}><NavLink to="/dialogs"
                         className={(navData) => navData.isActive ? classes.active : ''}>Messages</NavLink></li>
            <li className={classes.nav_link}><NavLink to="/users" className={(navData) => navData.isActive ? classes.active : ''}>Users</NavLink></li>
            <li className={classes.nav_link}><NavLink to="/news" className={(navData) => navData.isActive ? classes.active : ''}>News</NavLink></li>
            <li className={classes.nav_link}><NavLink to="/music" className={(navData) => navData.isActive ? classes.active : ''}>Music</NavLink>
            </li>
            <li className={classes.nav_link}><NavLink to="/settings"
                         className={(navData) => navData.isActive ? classes.active : ''}>Settings</NavLink></li>
        </ul>

    )
}

export default NavMenu;