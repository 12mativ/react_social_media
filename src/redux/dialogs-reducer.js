const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Fedor '},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Oleg'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {
            id: 2,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda ducimus explicabo illum, modi repellat.'
        },
        {
            id: 3,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
        },
        {
            id: 4,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
        },
        {
            id: 5,
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto explicabo fugiat id illo libero magni molestiae odit optio, sunt voluptates.'
        },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 6,
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newPost],
                newMessageText: '',
            };

        case UPDATE_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.messageText,
            };

        default:
            return state;
    }
}


export const sendMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        messageText: text
    }
}

export default dialogsReducer;