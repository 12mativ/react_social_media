import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 15},
        {id: 2, message: 'This is React...', likesCount: 20},
        {id: 3, message: 'My post!!!', likesCount: 100},
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText,
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state;
    }

}

//ACTION CREATORS
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, postText: text})

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

//THUNK
export const getUserProfile = (profileId) => {
    return async (dispatch) => {
        const data = await usersAPI.getProfile(profileId)
        dispatch(setUserProfile(data));
    }
}

export const getStatus = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(status)
        dispatch(setStatus(data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        try{
            const data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } catch (error) {
            debugger
        }

    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        const data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}

export const saveProfile = (profile, setStatus) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        const data = await profileAPI.saveProfile(profile)
        if (data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        } else {
            setStatus(data.messages)
            return Promise.reject(data.messages)
        }
    }
}

export default profileReducer;