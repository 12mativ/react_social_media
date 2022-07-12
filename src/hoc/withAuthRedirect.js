import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import withRouter from "../help_func/withRouter";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth && !this.props.router.params.profileId) return <Navigate to={'/login'}/>;

            return <Component {...this.props}/>
        }
    }

    return withRouter(connect(mapStateToPropsForRedirect)(RedirectComponent))
}