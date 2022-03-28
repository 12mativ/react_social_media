import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    //watch for textarea updates
    let newPostElement = React.createRef();

    //func of posting (in state.js)
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    //update current value of post text in state.js
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div>
            <h3 className={classes.posts_header}>My posts</h3>
            <div className={classes.post_field}>
                <textarea placeholder='Your post' ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;