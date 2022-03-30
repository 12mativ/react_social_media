import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

    //watch for textarea updates
    let newPostElement = React.createRef();

    //func of posting (in store.js)
    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator());
    }

    //update current value of post text in store.js
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3 className={classes.posts_header}>My posts</h3>
            <div className={classes.post_field}>
                <textarea placeholder='Your post' ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;