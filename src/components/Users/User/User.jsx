import styles from "./User.module.css";
import userPhoto from '../../../assets/images/01.png'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.user_ava}>
                <NavLink to={`/profile/${props.userId}`} >
                    <img src={props.photoURL.small != null ? props.photoURL.small : userPhoto} alt=""/>
                </NavLink>

                {props.followed
                    ? <button disabled={props.followingInProgress.some(id => id === props.userId)} onClick={() => {
                        props.unfollow(props.userId)
                    }}>Unfollow</button>

                    : <button disabled={props.followingInProgress.some(id => id === props.userId)} onClick={() => {
                        props.follow(props.userId);
                    }}>Follow</button>}

            </div>
            <div className={styles.user_info}>
                <div className={styles.user_description}>
                    <span className={styles.name}>{props.name}</span>
                    <p className={styles.status}>{props.status}</p>
                </div>
                <div className={styles.user_location}>
                    <span className={styles.city}>{'props.location.city'}</span>
                    <span className={styles.country}>{'props.location.country'}</span>
                </div>
            </div>
        </div>
    )
}

export default User;