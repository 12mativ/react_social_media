import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let PostsData = [
        {id: 1, message: 'Hi!', likesCount: 15},
        {id: 2, message: 'This is React...', likesCount: 20},
    ]

    return (
        <div>
            <h3 className={classes.posts_header}>My posts</h3>
            <div className={classes.post_field}>
                <textarea name="post" id="post" cols="30" rows="5" placeholder='Your post'></textarea>
                <button>Post</button>
            </div>
            <Post message={PostsData[0].message} likesCount={PostsData[0].likesCount}/>
            <Post message={PostsData[1].message} likesCount={PostsData[1].likesCount}/>
        </div>

    );
}

export default MyPosts;