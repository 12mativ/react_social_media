import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
        </div>
    );
}

export default Profile;