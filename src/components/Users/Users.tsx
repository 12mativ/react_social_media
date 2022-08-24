import React from "react";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import {UsersType} from "../../types/types";

export interface UsersProps {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    users: Array<UsersType>
    onPageChanged: (page: number) => void
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<UsersProps> = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    const usersArray = users.map(user => <User key={user.id} photoURL={user.photos}
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
            {usersArray}
        </div>
    )
}

export default Users;