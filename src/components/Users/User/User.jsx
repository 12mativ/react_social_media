import styles from "./User.module.css";
import userPhoto from '../../../assets/images/01.png'

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.user_ava}>
                <img src={props.photoURL.small != null ? props.photoURL.small : userPhoto} alt=""/>
                {props.followed
                    ? <button onClick={() => {
                        props.unfollow(props.userId)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(props.userId)
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