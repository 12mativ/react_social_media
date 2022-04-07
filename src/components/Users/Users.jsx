import styles from "./Users.module.css";
import React from "react";
import User from "./User/User";

const Users = (props) => {
    let users = props.users.map(user => <User photoURL={user.photos}
                                                   userId={user.id}
                                                   followed={user.followed}
                                                   name={user.name}
                                                   status={user.status}
                                                   follow={props.follow}
                                                   unfollow={props.unfollow}/>)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={styles.pagination}>
                {pages.map(page => {
                    return <span className={props.currentPage === page ? styles.selectedPage : ''}
                                 onClick={() => { props.onPageChanged(page) }}>{page}</span>
                })}
            </div>
            {users}
        </div>

    )
}

export default Users;