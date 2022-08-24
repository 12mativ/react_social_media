import classes from "./User.module.css";
import userPhoto from '../../../assets/images/01.png'
import {NavLink} from "react-router-dom";
import React from "react";
import {PhotosType} from "../../../types/types";

interface UserProps {
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    userId: number
    photoURL: PhotosType
    followed: boolean
    name: string
    status: string
}

const User: React.FC<UserProps> = ({userId, photoURL, followed, followingInProgress, follow, unfollow, name, status}) => {
    return (
        <div className={classes.user}>
            <div className={classes.user_ava}>
                <NavLink to={`/profile/${userId}`} >
                    <img src={photoURL.small != null ? photoURL.small : userPhoto} alt=""/>
                </NavLink>

                {followed
                    ? <button disabled={followingInProgress.some(id => id === userId)} onClick={() => {
                        unfollow(userId)
                    }}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === userId)} onClick={() => {
                        follow(userId);
                    }}>Follow</button>}

            </div>
            <div className={classes.user_info}>
                <div className={classes.user_description}>
                    <span className={classes.name}>{name}</span>
                    <p className={classes.status}>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default User;