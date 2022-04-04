import classes from './NavFriends.module.css';

const NavFriends = (props) => {
        let friend_name = props.friends
            .map(friend => <span className={classes.friend_ava} key={friend.id}><img
                src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                alt=""/><span>{friend.name}</span></span>)
    return (
        <div>
            <span className={classes.friend_header}>Friends</span>
            <div className={classes.friends}>
                {friend_name}
            </div>
        </div>

    )

}

export default NavFriends;