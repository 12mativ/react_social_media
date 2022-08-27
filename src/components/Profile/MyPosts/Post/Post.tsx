import classes from './Post.module.css';
import React from "react";

type PostProps = {
    message: string
    likesCount: number
}

const Post: React.FC<PostProps> = ({message, likesCount}) => {
    return (
        <div className={classes.item}>
            <div className={classes.desc}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt=""/>
                <span>{message}</span>
            </div>

            <div className={classes.likes}>
                <span>{likesCount} Likes</span>
            </div>
        </div>

    );
}

export default Post;