import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {chatApi, ChatMessageType} from "../../api/chat-api";
import {Dispatch} from "redux";

let initialState = {
    messages: [] as ChatMessageType[],
}

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'project2/chat/MESSAGES-RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
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

//THUNK
export const startMessagesListening = (): ThunkType => {
    return async (dispatch) => {
        chatApi.start()
        chatApi.subscribe(newMessageHandlerCreator(dispatch))
    }
}

export const stopMessagesListening = (): ThunkType => {
    return async (dispatch) => {
        chatApi.unsubscribe(newMessageHandlerCreator(dispatch))
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
