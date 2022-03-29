import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;