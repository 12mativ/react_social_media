import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let contacts = [];
    let i = 1
        for (let contact in props.profile.contacts) {
            if (props.profile.contacts[contact]) {
                contacts.push(
                    <li key={i}>{contact} - {props.profile.contacts[contact]}</li>
                )
                i++
            }
        }

    return (
        <div className={classes.content}>
            <img className={classes.head_img}
                 src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg"
                 alt=""/>
            <div className={classes.description}>
                <img src={props.profile.photos.large === null ? null : props.profile.photos.large} alt=''/>
                <h1>About me</h1>
                <p>{props.profile.aboutMe}</p>
                <h2>Contacts</h2>
                <ul>
                    {contacts}
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;