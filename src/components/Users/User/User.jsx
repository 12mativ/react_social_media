import styles from "./User.module.css";
import userPhoto from '../../../assets/images/01.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className={styles.user_ava}>
                <NavLink to={`/profile/${props.userId}`} >
                    <img src={props.photoURL.small != null ? props.photoURL.small : userPhoto} alt=""/>
                </NavLink>

                {props.followed
                    ? <button onClick={() => {
                        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + props.userId,
                            {
                                withCredentials: true,
                                headers:{
                                    'API-KEY': '50e9bd11-342b-4937-8f6c-bd19753a6e9e'
                                }
                            }
                        )
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(props.userId)
                                }
                            })

                    }}>Unfollow</button>

                    : <button onClick={() => {
                        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + props.userId, {},
                            {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '50e9bd11-342b-4937-8f6c-bd19753a6e9e'
                                }
                            })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(props.userId)
                                }
                            })

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