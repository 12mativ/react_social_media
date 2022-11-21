import {connect} from "react-redux";
import {
    follow, requestUsers,
    unfollow, actions
} from "../../redux/users/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users/users-selectors";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {UsersType} from "../../types/types";

type MapStateProps = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
}

type MapDispatchProps = {
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (page: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

// just to test own props
type OwnProps = {
    pageTitle: string
}

type UsersContainerProps = MapStateProps & MapDispatchProps & OwnProps

class UsersContainer extends React.Component<UsersContainerProps> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props

        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (page: number) => {
        const {pageSize} = this.props

        this.props.getUsers(page, pageSize);
        this.props.setCurrentPage(page);
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

//for throw this to UsersContainer clearly n easy
const setCurrentPage = actions.setCurrentPage

export default compose(connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers: requestUsers,
}))(UsersContainer)
