const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', likesCount: 15},
                {id: 2, message: 'This is React...', likesCount: 20},
                {id: 3, message: 'My post!!!', likesCount: 100},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends:[
                {name: 'Ivan'},
                {name: 'Oleg'},
                {name: 'Dmitry'},
            ]
        }
    },
    _callSubscriber(){},
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_POST_TEXT) {
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newPost = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newPost);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        postText: text
    }
}

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        messageText: text
    }
}

export default store;