import React from "react";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    let users = props.users.map(user => <User key={user.id} photoURL={user.photos}
                                              userId={user.id}
                                              followed={user.followed}
                                              name={user.name}
                                              status={user.status}
                                              follow={props.follow}
                                              unfollow={props.unfollow}
                                              followingInProgress={props.followingInProgress}

    />)

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users}
        </div>
    )
}

export default Users;