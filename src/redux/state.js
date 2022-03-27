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
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updatePostText(postText) {
        this._state.profilePage.newPostText = postText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newPost = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
        }

        this._state.dialogsPage.messages.push(newPost);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateMessageText(messageText) {
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

export default store;