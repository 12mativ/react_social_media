import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import withRouter from "../../help_func/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
