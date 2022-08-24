import {ResultCodesEnum, ResultCodesForCaptcha} from "../../api/api"
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {authAPI} from "../../api/auth-api";
import {securityAPI} from "../../api/security-api";

let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false,
    captchaURL: null as null | string // if null, captcha is not required
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'project2/auth/SET-USER-DATA':
        case 'project2/auth/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

//ACTION CREATOR
export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'project2/auth/SET-USER-DATA',
        payload: {userId, email, login, isAuth}
    } as const),

    getCaptchaURLSuccess: (captchaURL: string | null) => ({
        type: 'project2/auth/GET-CAPTCHA-URL-SUCCESS',
        payload: {captchaURL}
    } as const)
}


//THUNK
export const getAuthUserData = (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.me()
        if (data.resultCode === ResultCodesEnum.Success) {
            let {id, email, login} = data.data
            dispatch(actions.setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string,
                      rememberMe: string | null, captcha: string | null, setStatus: any): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha)

        if (data.resultCode === ResultCodesEnum.Success) {
            await dispatch(getAuthUserData())
        } else {
            if (data.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
                await dispatch(getCaptchaURL())
            }
            setStatus(data.messages)
        }
    }
}

export const getCaptchaURL = (): ThunkType => {
    return async (dispatch) => {
        let data = await securityAPI.getCaptchaURL()
        const captchaURL = data.url
        dispatch(actions.getCaptchaURLSuccess(captchaURL))
    }
}

export const logout = (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.logout()

        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.getCaptchaURLSuccess(null))
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer

export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>
