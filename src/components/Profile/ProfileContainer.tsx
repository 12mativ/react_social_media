import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile} from "../../redux/profile/profile-reducer";
import {getUserIdSelector} from "../../redux/profile/profile-selectors";
import {useParams} from "react-router-dom";

const ProfileContainer: React.FC = () => {
    const dispatch = useDispatch()
    const profileId = useParams<{profileId?: string}>().profileId

    const userId = useSelector(getUserIdSelector)

    const refreshProfile = () => {
        let id: number | null = null
        if (profileId) {
            id = +profileId
        }
        if (!id) {
            id = userId
        }
        if (!id) {
            console.error('ID should exist in URI params or in state ')
        } else {
            dispatch(getUserProfile(id))
            dispatch(getStatus(id))
        }
    }

    useEffect(() => {
        refreshProfile()
    }, [])

    useEffect(() => {
        refreshProfile()
    }, [profileId])

    return (
      <Profile />
    )
}

export default ProfileContainer
