import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg" alt=""/>
            <div className={classes.description}>
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi architecto corporis cupiditate dolor dolorum, eos est eum ex hic ipsa ipsam iste itaque iure iusto laboriosam nam nisi officiis provident quam, quis quisquam quo recusandae repellat repellendus sequi suscipit velit! Aliquam corporis hic id officiis possimus sequi tempora voluptates.</p>
            </div>
        </div>
    );
}

export default ProfileInfo;