import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div>
            <h3 className={classes.posts_header}>My posts</h3>
            <div className={classes.post_field}>
                <textarea name="post" id="post" cols="30" rows="5" placeholder='Your post'></textarea>
                <button>Post</button>
            </div>
            {postsElements}
        </div>

    );
}

export default MyPosts;