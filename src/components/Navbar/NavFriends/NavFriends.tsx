import classes from './NavFriends.module.css';
import {FriendType} from "./NavFriendsContainer";
import React from "react";

type NavFriendsProps = {
    friends: Array<FriendType>
}

const NavFriends: React.FC<NavFriendsProps> = ({friends}) => {
        let friend_name = friends
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