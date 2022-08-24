import {ResultCodesEnum} from "../../api/api"
import {PhotosType, PostsType, ProfileType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";

import {profileAPI} from "../../api/profile-api";

let initialState = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 15},
        {id: 2, message: 'This is React...', likesCount: 20},
        {id: 3, message: 'My post!!!', likesCount: 100},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'project2/profile/ADD-POST':
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case 'project2/profile/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile,
            }

        case 'project2/profile/SET-STATUS':
            return {
                ...state,
                status: action.status,
            }
        case 'project2/profile/DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case 'project2/profile/SAVE-PHOTO-SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }

        default:
            return state
    }

}

//ACTION CREATORS
export const actions = {
    deletePost: (postId: number) => ({type: 'project2/profile/DELETE-POST', postId} as const),

    addPost: (text: string) => ({type: 'project2/profile/ADD-POST', postText: text} as const),

    setUserProfile: (profile: ProfileType) => ({type: 'project2/profile/SET-USER-PROFILE', profile} as const),

    setStatus: (status: string) => ({type: 'project2/profile/SET-STATUS', status} as const),

    savePhotoSuccess: (photos: PhotosType) => ({type: 'project2/profile/SAVE-PHOTO-SUCCESS', photos} as const),
}

//THUNK
// type GetStateType = () => AppStateType
// type DispatchType = Dispatch<ActionsTypes>

export const getUserProfile = (profileId: number | null): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(profileId)
        dispatch(actions.setUserProfile(data))
    }
}

export const getStatus = (profileId: number): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(profileId)
        dispatch(actions.setStatus(data))
    }
}

export const updateStatus = (status: string): ThunkType => {
    return async (dispatch) => {
        try{
            const data = await profileAPI.updateStatus(status)
            if (data.resultCode === ResultCodesEnum.Success) {
                dispatch(actions.setStatus(status))
            }
        } catch (error) {
            alert('Update error')
        }

    }
}

export const savePhoto = (file: File): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.savePhotoSuccess(data.data.photos))
        }
    }
}

export const saveProfile = (profile: ProfileType, setStatus: any): ThunkType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const data = await profileAPI.saveProfile(profile)
        if (data.resultCode === ResultCodesEnum.Success) {
            if (userId != null) {
                await dispatch(getUserProfile(userId))
            } else {
                throw new Error('User id can not be null')
            }

        } else {
            setStatus(data.messages)
            return Promise.reject(data.messages)
        }
    }
}

export default profileReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>