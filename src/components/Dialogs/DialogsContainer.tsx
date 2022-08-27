import {InitialStateType, actions} from "../../redux/dialogs/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/dialogs/dialogs-selector";
import {AppStateType} from "../../redux/redux-store";
import React from "react";

type MapStateProps = {
    dialogsPage: InitialStateType
}

type MapDispatchProps = {
    sendMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateProps => {
    return {
        dialogsPage: getDialogsPage(state)
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchProps => {
    return {
        sendMessage: (text: string) => {
            dispatch(actions.sendMessage(text))
        },
    }
}

type DialogsContainerProps = MapStateProps & MapDispatchProps

export default compose<DialogsContainerProps>(
    connect<MapStateProps, MapDispatchProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);