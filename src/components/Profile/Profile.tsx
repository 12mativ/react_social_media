import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";
import React from "react";

type ProfileProps = {
    profile: ProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType, setStatus: any) => void
}

const Profile: React.FC<ProfileProps> =
    ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
        </div>
    );
}

export default Profile;