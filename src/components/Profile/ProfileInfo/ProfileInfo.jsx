import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    let contacts = [];
    let i = 1
        for (let contact in profile.contacts) {
            if (profile.contacts[contact]) {
                contacts.push(
                    <li key={i}>{contact} - {profile.contacts[contact]}</li>
                )
                i++
            }
        }

    return (
        <div className={classes.content}>
            <div className={classes.description}>
                <img src={profile.photos.large === null ? null : profile.photos.large} alt=''/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <h1>About me</h1>
                <p>{profile.aboutMe}</p>
                <h2>Contacts</h2>
                <ul>
                    {contacts}
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;