import classes from './Navbar.module.css';
import NavMenu from "./NavMenu/NavMenu";
import NavMenuContainer from "./NavFriends/NavFriendsContainer";

const Navbar = () => {
    return (
        <nav className={classes.nav}>

            <NavMenu/>
            <NavMenuContainer/>

        </nav>
    )
}

export default Navbar;