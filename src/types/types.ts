export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export interface ProfileType {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export interface UsersType {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}