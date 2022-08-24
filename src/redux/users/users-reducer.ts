import {ResultCodesEnum} from "../../api/api"
import {updateObjectInArray} from "../../help_func/object-helpers"
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/users-api";
import {UsersType} from "../../types/types";

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of user ids
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'project2/users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    'id',
                    {followed: true}
                )
            }
        case "project2/users/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    action.userId,
                    'id',
                    {followed: false}
                )
            }
        case "project2/users/SET_USERS":
            return {...state, users: action.users}

        case "project2/users/SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}

        case "project2/users/SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.totalCount}

        case "project2/users/TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}

        case "project2/users/TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }

}

// ACTION CREATORS
export const actions = {
    followSuccess: (userId: number) => ({type: 'project2/users/FOLLOW', userId: userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'project2/users/UNFOLLOW', userId: userId} as const),
    setUsers: (users: Array<UsersType>) => {
        return {type: 'project2/users/SET_USERS', users: users} as const
    },
    setCurrentPage: (currentPage: number) => {
        return {type: 'project2/users/SET_CURRENT_PAGE', currentPage: currentPage} as const
    },
    setTotalCount: (totalCount: number) => {
        return {type: 'project2/users/SET_TOTAL_COUNT',  totalCount: totalCount} as const
    },
    toggleIsFetching:(isFetching: boolean) => {
        return {type: 'project2/users/TOGGLE_IS_FETCHING', isFetching: isFetching} as const
    },
    toggleFollowingProgress: (isFetching: boolean, userId: number) => {
        return {
            type: 'project2/users/TOGGLE_IS_FOLLOWING_PROGRESS',
            isFetching: isFetching,
            userId: userId,
        } as const
    }

}

//THUNK
// type GetStateType = () => AppStateType

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))

        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))

    let data = await apiMethod(userId)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}

export default usersReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>