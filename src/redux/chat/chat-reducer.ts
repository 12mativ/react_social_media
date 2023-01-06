import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {chatApi, ChatMessageType, StatusType} from "../../api/chat-api";
import {Dispatch} from "redux";

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'project2/chat/MESSAGES-RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }

        case 'project2/chat/STATUS-CHANGED':
            return {
                ...state,
                status: action.payload.status,
            }
        default:
            return state
    }
}

//ACTION CREATOR
export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'project2/chat/MESSAGES-RECEIVED',
        payload: {messages}
    } as const),

    statusChanged: (status: StatusType) => ({
        type: 'project2/chat/STATUS-CHANGED',
        payload: {status}
    } as const),
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if(_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

//THUNK
export const startMessagesListening = (): ThunkType => {
    return async (dispatch) => {
        chatApi.start()
        chatApi.subscribe('message-received', newMessageHandlerCreator(dispatch))
        chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
    }
}

export const stopMessagesListening = (): ThunkType => {
    return async (dispatch) => {
        chatApi.unsubscribe('message-received', newMessageHandlerCreator(dispatch))
        chatApi.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
        chatApi.stop()
    }
}

export const sendMessage = (message: string): ThunkType => {
    return async (dispatch) => {
        chatApi.sendMessage(message)
    }
}

export default chatReducer

export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>