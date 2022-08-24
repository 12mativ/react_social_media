import {APIResponseType, instance, ResultCodesForCaptcha, ResultCodesEnum} from "./api";

type MeResponseDataType = {
    id: number
    email: string
    login: string

}

type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>('auth/me').then(response => response.data)
    },

    login(email: string, password: string, rememberMe: string | null, captcha: null | string) {
        return instance.post<APIResponseType<LoginResponseDataType,
            ResultCodesEnum | ResultCodesForCaptcha>>('/auth/login',
            {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
            .then(response => response.data)
    },

    logout() {
        return instance.delete<APIResponseType>('/auth/login')
            .then(response => response.data)
    }
}