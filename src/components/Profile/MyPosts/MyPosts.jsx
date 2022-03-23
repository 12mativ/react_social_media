import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3 className={classes.posts_header}>My posts</h3>
            <div className={classes.post_field}>
                <textarea name="post" id="post" cols="30" rows="5" placeholder='Your post'></textarea>
                <button>Post</button>
            </div>
            <Post message='Hi!' likes='15'/>
            <Post message='This is React...' likes='20'/>
        </div>

    );
}

export default MyPosts;