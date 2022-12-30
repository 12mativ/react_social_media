import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";
import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProfileSelector, getStatusSelector} from "../../redux/profile/profile-selectors";
import {savePhoto, saveProfile, updateStatus} from "../../redux/profile/profile-reducer";

const Profile: React.FC = () => {

    const dispatch = useDispatch()

    const isOwner = !useParams<{profileId?: string}>().profileId
    const profile = useSelector(getProfileSelector)
    const status = useSelector(getStatusSelector)

    const updateStatusFunc = (status: string) => {
        dispatch(updateStatus(status))
    }

    const savePhotoFunc = (file: File) => {
        dispatch(savePhoto(file))
    }

    const saveProfileFunc = (profile: ProfileType, setStatus: any) => {
        dispatch(saveProfile(profile, setStatus))
    }

    return (
        <div>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatusFunc}
                savePhoto={savePhotoFunc}
                saveProfile={saveProfileFunc}
            />
        </div>
    );
}

export default Profile;