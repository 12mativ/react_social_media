import {PhotosType, ProfileType} from "../types/types";
import {APIResponseType, instance} from "./api";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(profileId: number | null) {
        return instance.get<ProfileType>(
            `profile/${profileId}`)
            .then(response => response.data);
    },

    getStatus(profileId: number) {
        return instance.get<string>(`profile/status/${profileId}`)
            .then(response => response.data);
    },

    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status})
            .then(response => response.data);
    },

    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },

    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profile)
            .then(response => response.data);
},

}