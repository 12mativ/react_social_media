import {DialogType, MessageType} from "../../types/types";
import {InferActionsTypes} from "../redux-store";

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Fedor '},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Oleg'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi!'},
        {
            id: 2,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Aperiam assumenda ducimus explicabo illum, modi repellat.'
        },
        {
            id: 3,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
        },
        {
            id: 4,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                ' Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
        },
        {
            id: 5,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                ' Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
        },
    ] as Array<MessageType>,
}

const dialogsReducer =
    (state = initialState, action: ActionsTypes): InitialStateType => {
        switch (action.type) {
            case 'project2/dialogs/ADD-MESSAGE':
                let newPost = {
                    id: 6,
                    message: action.messageText,
                }
                return {
                    ...state,
                    messages: [...state.messages, newPost],
                }

            default:
                return state
        }
    }

//ACTION CREATOR
export const actions = {
    sendMessage: (text: string) => ({type: 'project2/dialogs/ADD-MESSAGE', messageText: text})
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>