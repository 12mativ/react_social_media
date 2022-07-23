import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'project2/auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'project2/auth/GET-CAPTCHA-URL-SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null // if null, captcha is not required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaURLSuccess = (captchaURL) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaURL}
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

export const login = (email, password, rememberMe, setStatus, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaURL())
            }
            setStatus(data.messages)
        }
    }
}

export const getCaptchaURL = () => {
    return async (dispatch) => {
        let data = await securityAPI.getCaptchaURL()
        const captchaURL = data.url
        dispatch(getCaptchaURLSuccess(captchaURL))
    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()

        if (data.resultCode === 0) {
            dispatch(getCaptchaURLSuccess(null))
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;