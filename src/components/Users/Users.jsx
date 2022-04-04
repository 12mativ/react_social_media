import React from "react";
import User from "./User/User";
import * as axios from "axios";
import styles from './Users.module.css'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        let users = this.props.users.map(user => <User photoURL={user.photos}
                                                       userId={user.id}
                                                       followed={user.followed}
                                                       name={user.name}
                                                       status={user.status}
                                                       follow={this.props.follow}
                                                       unfollow={this.props.unfollow}/>)
        return (
            <div>
                <div className={styles.pagination}>
                    {pages.map(page => {
                        return <span className={this.props.currentPage === page ? styles.selectedPage : ''}
                                     onClick={() => { this.onPageChanged(page) }}>{page}</span>
                    })}
                </div>
                {users}
            </div>

        )
    }
}

export default Users;