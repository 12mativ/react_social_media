import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },

        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;