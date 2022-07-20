import {authAPI} from "../api/api";

const SET_USER_DATA = 'project2/auth/SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }

        default:
            return state;
    }

}

//ACTION CREATOR
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

//THUNK
export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.me()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe, setStatus) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe)

        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            setStatus(data.messages)
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()

        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;