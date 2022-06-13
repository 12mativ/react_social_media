import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '50e9bd11-342b-4937-8f6c-bd19753a6e9e'
    }
})

/*================================USERS====================================*/
export const usersAPI = {
    getUsers(currentPage=1, pageSize=10){
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

    getProfile(profileId){
        return instance.get(
            `profile/${profileId}`)
            .then(response => response.data);
    }

}


export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    }
}