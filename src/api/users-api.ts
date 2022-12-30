import {APIResponseType, instance} from "./api";
import {UsersType} from "../types/types";

type GetUsersResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string, friend: boolean) {
        return instance.get<GetUsersResponseType>(
            `users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`)
            .then(response => response.data);
    },

    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollow(userId: number) {
        return instance.delete<APIResponseType>(`follow/${userId}`, {})
            .then(response => response.data)
    },
}