import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import withRouter from "../../help_func/withRouter";

class ProfileContainer extends React.Component{
    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        if(!profileId) {
            profileId = 2;
        }

        this.props.getUserProfile(profileId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));