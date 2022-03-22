import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" alt=""/>

            <div>
                ava + description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    );
}

export default Profile;