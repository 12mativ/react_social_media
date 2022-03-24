import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    let friend_name = props.state.friends
        .map(friend => <span className={classes.friend_ava}><img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt=""/><span>{friend.name}</span></span>)
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink  to="/profile" className={(navData) => navData.isActive ? classes.active : ''}>Profile</NavLink ></li>
                <li><NavLink  to="/dialogs" className={(navData) => navData.isActive ? classes.active : ''}>Messages</NavLink ></li>
                <li><NavLink  to="/news" className={(navData) => navData.isActive ? classes.active : ''}>News</NavLink ></li>
                <li><NavLink  to="/music" className={(navData) => navData.isActive ? classes.active : ''}>Music</NavLink ></li>
                <li><NavLink  to="/settings" className={(navData) => navData.isActive ? classes.active : ''}>Settings</NavLink ></li>
                <li>
                    <span className={classes.friend_header}>Friends</span>
                    <div className={classes.friend_avas}>
                        {friend_name}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;