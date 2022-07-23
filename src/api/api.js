import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '50e9bd11-342b-4937-8f6c-bd19753a6e9e'
    }
})

/*================================USERS====================================*/
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {})
            .then(response => response.data)
    },

    getProfile(profileId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(profileId);
    }

}

export const profileAPI = {
    getProfile(profileId) {
        return instance.get(
            `profile/${profileId}`)
            .then(response => response.data);
    },

    getStatus(profileId) {
        return instance.get(`profile/status/${profileId}`)
            .then(response => response.data);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data);
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data);
    },

}


export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    },

    login(email, password, rememberMe, captcha = null) {
        return instance.post('/auth/login',
            {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
            .then(response => response.data)
    },

    logout() {
        return instance.delete('/auth/login')
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get('security/get-captcha-url').then(response => response.data)
    },
}