import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile/profile-reducer";
import withRouter from "../../help_func/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

type MapStateProps = {
    profile: ProfileType | null
    status: string | null
    userId: number | null
    isAuth: boolean
}

type MapDispatchProps = {
    getUserProfile: (profileId: number) => void
    getStatus: (profileId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType, setStatus: any) => void
}

type OwnProps = {
    router: any
}

type ProfileContainerProps = MapStateProps & MapDispatchProps & OwnProps

class ProfileContainer extends React.Component<ProfileContainerProps> {
    refreshProfile() {
        let profileId = this.props.router.params.profileId;
        if (!profileId) {
            profileId = this.props.userId;
        }

        this.props.getUserProfile(profileId);
        this.props.getStatus(profileId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: MapStateProps & OwnProps) {
        if (this.props.router.params.profileId !== prevProps.router.params.profileId)
            this.refreshProfile();
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.router.params.profileId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
            />
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateProps, MapDispatchProps, OwnProps, AppStateType>
    (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withAuthRedirect,
)(ProfileContainer)
