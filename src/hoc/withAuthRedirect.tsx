import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import withRouter from "../help_func/withRouter";
import {AppStateType} from "../redux/redux-store";
import {compose} from "redux";

const mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId
    }
}

type WithAuthRedirectProps = {
    isAuth: boolean
    router: any
}

export function withAuthRedirect<WCP extends WithAuthRedirectProps>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<WCP> = (props) => {
        const {isAuth, ...restProps} = props
        if (!isAuth && !props.router.params.profileId) return <Navigate to={'/login'}/>;

        return <WrappedComponent {...restProps as WCP}/>
    }
    return compose(
        connect(mapStateToPropsForRedirect),
        withRouter
    )(RedirectComponent)
}