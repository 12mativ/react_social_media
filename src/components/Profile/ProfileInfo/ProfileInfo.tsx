import React, {ChangeEvent} from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/01.png'
import {useState} from "react";
import {ProfileDataForm} from "./ProfileFormData";
import { clsx } from 'clsx';
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ContactsType, ProfileType} from "../../../types/types";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string | null
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType, setStatus: any) => void
}

const ProfileInfo: React.FC<ProfileInfoProps> =
    ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onProfilePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={classes.content}>
            <div className={classes.description}>
                <div className={classes.main_description}>
                    <div className={classes.main_description_pers}>
                        <img className={classes.profile_photo} src={profile.photos.large || userPhoto} alt=''/>
                        <h1>{profile.fullName}</h1>
                    </div>
                    {isOwner && !editMode
                        ? <button onClick={() => setEditMode(true)}
                                  className={clsx('btn', classes.edit_btn)}>Edit profile</button>
                        : null
                    }
                </div>

                {isOwner &&
                    <label className={classes.photo_choose}>
                        Choose a profile photo
                        <input type="file" onChange={onProfilePhotoSelected}/>
                    </label>
                }
                {editMode
                    ? <ProfileDataForm
                        profile={profile}
                        saveProfile={saveProfile}
                        deactivateEditMode={() => setEditMode(false)}
                    />
                    : <>
                        <ProfileData
                            profile={profile}
                            status={status}
                            updateStatus={updateStatus}
                            isOwner={isOwner}
                        />
                        <MyPostsContainer />
                    </>
                }
            </div>
        </div>
    );
}

type ProfileDataProps = {
    profile: ProfileType
    status: string | null
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileData: React.FC<ProfileDataProps> = ({profile, status, updateStatus, isOwner}) => {
    return (
        <div>
            <ProfileStatusWithHooks status={
                status} updateStatus={updateStatus} isOwner={isOwner}/>

            {profile.aboutMe &&
                <div className={classes.description_block}>
                    <h2>About me</h2>
                    <p>{profile.aboutMe}</p>
                </div>
            }

            <div className={classes.description_block}>
                <h2>Looking for a job:</h2> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>

            {profile.lookingForAJobDescription &&
                <div className={classes.description_block}>
                    <h2>Skills description: </h2> {profile.lookingForAJobDescription}
                </div>
            }


            <div className={classes.description_block}>
                <h2>Contacts</h2>
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                    return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key as keyof ContactsType]}
                    />
                })}
            </div>
        </div>
    )
}

type ContactProps = {
    contactTitle: string
    contactValue: string | null
}

const Contact: React.FC<ContactProps> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;