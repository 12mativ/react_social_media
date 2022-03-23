import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink  to="/profile" className={(navData) => navData.isActive ? classes.active : ''}>Profile</NavLink ></li>
                <li><NavLink  to="/dialogs" className={(navData) => navData.isActive ? classes.active : ''}>Messages</NavLink ></li>
                <li><NavLink  to="/news" className={(navData) => navData.isActive ? classes.active : ''}>News</NavLink ></li>
                <li><NavLink  to="/music" className={(navData) => navData.isActive ? classes.active : ''}>Music</NavLink ></li>
                <li><NavLink  to="/settings" className={(navData) => navData.isActive ? classes.active : ''}>Settings</NavLink ></li>
            </ul>
        </nav>
    );
}

export default Navbar;