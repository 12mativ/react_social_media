import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            <div className={classes.desc}>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt=""/>
                <span>{props.message}</span>
            </div>

            <div className={classes.likes}>
                <span>{props.likes} Likes</span>
            </div>
        </div>

    );
}

export default Post;