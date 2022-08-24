import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";

type MapStateProps = {
    isAuth: boolean
    login: string | null
}

type MapDispatchProps = {
    logout: () => void
}

type HeaderContainerType = MapStateProps & MapDispatchProps

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout} />
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    connect<MapStateProps, MapDispatchProps, null, AppStateType>(mapStateToProps, {logout})
)(HeaderContainer);