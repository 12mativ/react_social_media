import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
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

        default:
            return state;
    }

}

//ACTION CREATORS
export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        postText: text
    }
}

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

//THUNK
export const getUserProfile = (profileId) => {
    return (dispatch) => {
        usersAPI.getProfile(profileId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getStatus = (status) => {
    return (dispatch) => {
        profileAPI.getStatus(status).then(data => {
            dispatch(setStatus(data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;